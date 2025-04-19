import { Api } from "@/services/api-client";
import { useEffect, useState } from "react";

export type RollType = { value: string; name: string; }
export const useRollTypes = () => {
    const [rollType, setRollType] = useState<RollType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getRollTypes() {
            try {
                setLoading(true)
                const rollTypes = await Api.rollType.getAllRollTypes();
                setRollType(rollTypes.map(({ id, name }) => ({ value: id.toString(), name })));
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        getRollTypes()
    }, []);

    return { rollType, loading };
}

