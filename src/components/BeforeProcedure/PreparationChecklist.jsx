export default function PreparationChecklist() {
    return (
      <ul className="space-y-3 text-stone-gray">
        <li className="flex items-start">
          <span className="text-olive-gold mr-2">•</span>
          <span>Stop blood-thinning medications 2 weeks prior (consult your doctor)</span>
        </li>
        <li className="flex items-start">
          <span className="text-olive-gold mr-2">•</span>
          <span>No alcohol 48 hours before procedure</span>
        </li>
        <li className="flex items-start">
          <span className="text-olive-gold mr-2">•</span>
          <span>Wash hair thoroughly the night before</span>
        </li>
        <li className="flex items-start">
          <span className="text-olive-gold mr-2">•</span>
          <span>Arrange for transportation home</span>
        </li>
      </ul>
    );
  }