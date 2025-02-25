import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";

const products = [
	{
		id: 1,
		name: "Чизбургер",
		description: 'Бургер среднего размера с говяжей котлетой приготовленной на огне, с ломтиком сыра, горчицей и кетчупом.',
		items: [{
			price: 950
		}],
		imageUrl: "/1628580822.png",
	},
	{
		id: 2,
		name: "бургер чикен",
		items: [{
			price: 950
		}],
		imageUrl: "/бургер чикен.png"
	},
	{
		id: 3,
		name: "Чизбургер",
		items: [{
			price: 950
		}],
		imageUrl: "/1628580822.png"
	},
	{
		id: 4,
		name: "Чизбургер",
		items: [{
			price: 950
		}],
		imageUrl: "/1628580822.png"
	},
	{
		id: 5,
		name: "Чизбургер",
		items: [{
			price: 950
		}],
		imageUrl: "/1628580822.png"
	},
	{
		id: 6,
		name: "Чизбургер",
		items: [{
			price: 950
		}],
		imageUrl: "/1628580822.png"
	},
];

export default function Home() {
	return (<>
		<Container className="mt-10">
			<h1 className="text-3xl font-black">Все бургеры</h1>
		</Container>
		<TopBar />
		<Container className="h-auto flex gap-[60px]">
			{/* left */}
			<div className="w-[250px] p-4">
				<Filters />
			</div>
			{/* right */}
			<div className="w-[80%] p-4 ">
				<ProductsGroupList
					title={"Бургеры"}
					products={products}
					categoryId={1} />
				<ProductsGroupList
					title={"Комбо"}
					products={products}
					categoryId={2} />
			</div>
		</Container>
	</>
	);
}
