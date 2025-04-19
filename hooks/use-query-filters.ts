import { useEffect } from "react";
import { Filters } from "./use-filters";
import { useRouter } from "next/navigation";
import qs from "qs";

export const useQueryFilters = ({ price, sizes, selectedRollsType }: Filters) => {
    const router = useRouter();

    useEffect(() => {
        const filters = {
            ...price,
            sizes: Array.from(sizes),
            rollTypes: Array.from(selectedRollsType)
        };
        const queryString = qs.stringify(filters, {
            arrayFormat: 'comma'
        });

        router.push(`?${queryString}`, {
            scroll: false
        });
    }, [price, sizes, selectedRollsType, router])
}
