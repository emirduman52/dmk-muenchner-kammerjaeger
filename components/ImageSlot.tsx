export default function ImageSlot({ label }: { label: string }) {
  return (
    <div className="imgslot" role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
