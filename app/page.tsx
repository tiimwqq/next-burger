import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";

export default function Home() {
  return (
    <Container className="mt-10">
      <h1 className="text-4xl font-black">Все бургеры</h1>
      <Categories/>
    </Container>
  );
}
