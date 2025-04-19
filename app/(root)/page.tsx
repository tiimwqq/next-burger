import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					productItems: true,
					category: true
				}
			}
		}
	})

	return (<>
		<Container className="mt-10">
			<h1 className="text-3xl font-extrabold mb-2">Все суши и роллы</h1>
		</Container>
		<TopBar categories={categories.filter(category => category.products.length > 0)}/>
		<Container className="h-auto flex gap-[60px]">
			{/* left */}
			<div className="w-[250px] p-4">
				<Filters />
			</div>
			{/* right */}
			<div className="w-[80%] p-4 ">
				{categories
					.filter(category => category.products.length > 0) // Отфильтруем пустые категории
					.map(category => (
						<ProductsGroupList
							key={category.id}
							title={category.name}
							products={category.products}
							categoryId={category.id}
						/>
					))}
			</div>
		</Container>
	</>
	);
}
