import { Api } from "@/services/api-client"
import { useEffect, useState } from "react"
import { useSet } from "react-use";

type Ingredient = { value: string; text: string; }
type IngredientItem = {
    ingredients: Ingredient[]
    loading: boolean
    selectedIds: Set<string>
    toggleId: (id: string) => void
}
export const useFilterIngredients = (): IngredientItem => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedIds, { toggle, }] = useSet(new Set<string>([]));

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

    return { ingredients, loading, selectedIds, toggleId: toggle };
}