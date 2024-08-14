export const fetchBrands = async (page: number) => {
  const response = await fetch(`/api/brands?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }
  return response.json();
};
