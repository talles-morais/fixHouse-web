import ServiceCard from "../ServiceCard";

export default function PopularServices() {
  return (
    <div className="bg-light-blue flex flex-col justify-center items-center w-full py-6 gap-3">
      <h2 className="text-xl text-dark-blue">Serviços mais populares</h2>
      <div className="grid grid-cols-2 gap-9">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
