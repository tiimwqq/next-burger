import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSet } from "react-use";

export type PriceProps = {
    priceFrom?: number;
    priceTo?: number;
}

type QueryFilters = PriceProps & {
    sizes?: string;
    ingredients?: string;
}

export type Filters = {
    price: PriceProps;
    sizes: Set<string>;
    selectedIngredients: Set<string>;
}

type ReturnFilters = Filters & {
    toggleSizes: (id: string) => void;
    toggleIngredients: (id: string) => void;
    updatePrice: (name: keyof PriceProps, value: number) => void;
    setPrice: React.Dispatch<React.SetStateAction<PriceProps>>
}
export const useFilters = (): ReturnFilters => {
    const searchParams = useSearchParams();
    const searchFilterParams: QueryFilters = {
        priceFrom: searchParams.get("priceFrom") ? Number(searchParams.get("priceFrom")) : undefined,
        priceTo: searchParams.get("priceTo") ? Number(searchParams.get("priceTo")) : undefined,
        sizes: searchParams.get("sizes") ?? undefined,
        ingredients: searchParams.get("ingredients") ?? undefined,
    };
    // фильтр ингредиентов
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(
        searchFilterParams.ingredients ? searchFilterParams.ingredients.split(',') : []
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
        selectedIngredients,
        price,
        sizes,
        setPrice,
        toggleSizes,
        toggleIngredients,
        updatePrice
    }
}

//хук отвечает за хранение состояния фильтрации