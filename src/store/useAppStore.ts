import { create } from "zustand";
import {
  type Brand,
  type BrandKey,
  brands,
  defaultBrand,
} from "@/config/brand";

interface AppState {
  brandKey: BrandKey;
  brand: Brand;
  selectedPlan: string | null;
  quoteModalOpen: boolean;
  planModalOpen: boolean;
  setSelectedPlan: (plan: string | null) => void;
  setBrand: (key: BrandKey) => void;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  openPlanModal: (plan: string) => void;
  closePlanModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  brandKey: defaultBrand,
  brand: brands[defaultBrand],
  selectedPlan: null,
  quoteModalOpen: false,
  planModalOpen: false,
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
  setBrand: (key) => set({ brandKey: key, brand: brands[key] }),
  openQuoteModal: () => set({ quoteModalOpen: true }),
  closeQuoteModal: () => set({ quoteModalOpen: false, selectedPlan: null }),
  openPlanModal: (plan) => set({ selectedPlan: plan, planModalOpen: true }),
  closePlanModal: () => set({ planModalOpen: false }),
}));
