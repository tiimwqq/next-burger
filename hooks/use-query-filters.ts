import { useEffect } from "react";
import { Filters } from "./use-filters";
import { useRouter } from "next/navigation";
import qs from "qs";

export const useQueryFilters = ({ price, sizes, selectedIngredients }: Filters) => {
    const router = useRouter();

    useEffect(() => {
        const filters = {
            ...price,
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients)
        };
        const queryString = qs.stringify(filters, {
            arrayFormat: 'comma'
        });

        router.push(`?${queryString}`, {
            scroll: false
        });
    }, [price, sizes, selectedIngredients, router])
}
