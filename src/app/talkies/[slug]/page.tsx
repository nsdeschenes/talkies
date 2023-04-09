export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <p>Talkies: {params.slug}</p>
    </div>
  );
}
