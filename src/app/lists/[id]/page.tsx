export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>List: {params.id}</p>
    </div>
  );
}
