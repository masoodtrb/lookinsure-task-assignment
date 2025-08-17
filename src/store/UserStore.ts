import { createStore } from "zustand/vanilla";
import axios from "axios";

export interface UserState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCountry: string;
  countries: string[];
}

export interface UserActions {
  fetchUsers: () => Promise<void>;
  setSearchTerm: (term: string) => void;
  setSelectedCountry: (country: string) => void;
  filterUsers: () => void;
}

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  searchTerm: "",
  selectedCountry: "",
  countries: [],
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set, get) => ({
    ...initState,

    fetchUsers: async () => {
      set({ loading: true, error: null });
      try {
        const response = await axios.get<RandomUserResponse>(
          "https://randomuser.me/api/?results=10"
        );
        const users = response.data.results.map(
          (user) =>
            ({
              id: user.login.uuid,
              name: user.name,
              email: user.email,
              phone: user.phone,
              location: user.location,
              picture: user.picture,
            } as User)
        );

        const countries = Array.from(
          new Set(users.map((user) => user.location.country))
        ).sort() as string[];

        set({
          users,
          filteredUsers: users,
          countries,
          loading: false,
        });
      } catch (error) {
        console.error(error);
        set({
          error: "Failed to fetch users",
          loading: false,
        });
      }
    },

    setSearchTerm: (term: string) => {
      set({ searchTerm: term });
      get().filterUsers();
    },

    setSelectedCountry: (country: string) => {
      set({ selectedCountry: country });
      get().filterUsers();
    },

    filterUsers: () => {
      const { users, searchTerm, selectedCountry } = get();

      let filtered = users;

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(
          (user) =>
            user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter by country
      if (selectedCountry) {
        filtered = filtered.filter(
          (user) => user.location.country === selectedCountry
        );
      }

      set({ filteredUsers: filtered });
    },
  }));
};
