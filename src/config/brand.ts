export type BrandKey = "valleyOfEllah" | "fixRight";

export interface Brand {
  name: string;
  shortName: string;
  slogan: string;
  address: string;
  phones: string[];
  email: string;
}

export const brands: Record<BrandKey, Brand> = {
  valleyOfEllah: {
    name: "Valley of Ellah Property Maintenance and Services",
    shortName: "Valley of Ellah",
    slogan: "Fixing Homes, Building Trust",
    address: "33 Rhodesview Rd, Rhodesview Mall, Greendale, Harare",
    phones: ["0774 228 946", "0719 262 100"],
    email: "valleyofellah1@gmail.com",
  },
  fixRight: {
    name: "FixRight Property Solutions",
    shortName: "FixRight",
    slogan: "Fixing Homes, Building Trust",
    address: "33 Rhodesview Rd, Rhodesview Mall, Greendale, Harare",
    phones: ["0774 228 946", "0719 262 100"],
    email: "valleyofellah1@gmail.com",
  },
};

export const defaultBrand: BrandKey = "valleyOfEllah";
