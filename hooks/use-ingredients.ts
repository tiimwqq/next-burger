import { Api } from "@/services/api-client";
import { useEffect, useState } from "react";

export type Ingredient = { value: string; text: string; }
export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getIngredients() {
            try {
                setLoading(true)
                const ingredients = await Api.ingredients.getAllIngredients();
                setIngredients(ingredients.map(({ id, name }) => ({ value: id.toString(), text: name })));
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        getIngredients()
    }, []);

    return { ingredients, loading };
}

