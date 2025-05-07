export default function PreparationChecklist() {
    return (
      <span>
      <ul className="space-y-3 text-stone-gray">
        <li className="flex items-start">
          <span className="text-olive-gold mr-2 text-body">•</span>
          <span className="text-body">Stop blood-thinning medications 2 weeks prior (consult your doctor)</span>
        </li>
        <li className="flex items-start">
          <span className="text-olive-gold mr-2 text-body">•</span>
          <span className="text-body">No alcohol 48 hours before procedure</span>
        </li>
        <li className="flex items-start">
          <span className="text-olive-gold mr-2 text-body">•</span>
          <span className="text-body">Wash hair thoroughly the night before</span>
        </li>
        <li className="flex items-start">
          <span className="text-olive-gold mr-2 text-body">•</span>
          <span className="text-body">Arrange for transportation home</span>
        </li>
      </ul>
      </span>
    );
  }