import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

export type PriceProps = {
    priceFrom?: number;
    priceTo?: number;
}

type QueryFilters = PriceProps & {
    sizes?: string;
    rollTypes?: string;
}

export type Filters = {
    price: PriceProps;
    sizes: Set<string>;
    selectedRollsType: Set<string>;
}

type ReturnFilters = Filters & {
    toggleSizes: (id: string) => void;
    toggleRollsType: (id: string) => void;
    updatePrice: (name: keyof PriceProps, value: number) => void;
    setPrice: React.Dispatch<React.SetStateAction<PriceProps>>
}
export const useFilters = (): ReturnFilters => {
    const searchParams = useSearchParams();
    const searchFilterParams: QueryFilters = {
        priceFrom: searchParams.get("priceFrom") ? Number(searchParams.get("priceFrom")) : undefined,
        priceTo: searchParams.get("priceTo") ? Number(searchParams.get("priceTo")) : undefined,
        sizes: searchParams.get("sizes") ?? undefined,
        rollTypes: searchParams.get("roll-type") ?? undefined,
    };
    // фильтр ингредиентов
    const [selectedRollsType, { toggle: toggleRollsType }] = useSet(new Set<string>(
        searchFilterParams.rollTypes ? searchFilterParams.rollTypes.split(',') : []
    ));
    // фильтр цены
    const [price, setPrice] = useState<PriceProps>({
        priceFrom: searchFilterParams.priceFrom,
        priceTo: searchFilterParams.priceTo
    });

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...price,
            [name]: value
        })
    }
    // фильтр размеров
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(
        searchFilterParams.sizes ? searchFilterParams.sizes.split(',') : [])
    );

    return {
        selectedRollsType,
        price,
        sizes,
        setPrice,
        toggleSizes,
        toggleRollsType,
        updatePrice
    }
}

//хук отвечает за хранение состояния фильтрации