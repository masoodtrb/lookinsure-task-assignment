'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { type UserStore, createUserStore, type UserState } from '@/store/UserStore';

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi | undefined>(
    undefined,
);

export interface StoreProviderProps {
    children: ReactNode;
    initialState?: UserState;
}

export const StoreProvider = ({
    children,
    initialState,
}: StoreProviderProps) => {
    const storeRef = useRef<UserStoreApi | null>(null);
    if (storeRef.current === null) {
        storeRef.current = createUserStore(initialState);
    }

    return (
        <UserStoreContext.Provider value={storeRef.current}>
            {children}
        </UserStoreContext.Provider>
    );
};

export const useUserStore = <T,>(
    selector: (store: UserStore) => T,
): T => {
    const userStoreContext = useContext(UserStoreContext);

    if (!userStoreContext) {
        throw new Error(`useUserStore must be used within StoreProvider`);
    }

    return useStore(userStoreContext, selector);
};

export const useUserStoreShallow = <T,>(
    selector: (store: UserStore) => T,
): T => {
    const userStoreContext = useContext(UserStoreContext);

    if (!userStoreContext) {
        throw new Error(`useUserStoreShallow must be used within StoreProvider`);
    }

    return useStore(userStoreContext, useShallow(selector));
};
