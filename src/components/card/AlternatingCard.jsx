import React from 'react';
import male_hair from "../../assets/services/male_hair_transplant.jpg";
import female_hair from '../../assets/services/female_hair_transplant.jpg';
import eyebrow from '../../assets/services/eyebrow_transplant.jpg';
import over_scar from '../../assets/services/hair_transplant_overscar.jpg';
import beard_moustache from '../../assets/services/beard_and_moustache_hair_transplant.jpeg';
import repair from '../../assets/services/Repair_of_Failed_Hair_Transplant.jpg';
import body_hair from '../../assets/services/body_hair_transplant.jpg';
import reconstruction from '../../assets/services/Hairline_Reconstruction.jpg';
import scalp from '../../assets/services/Scalp_Micropigmentation.jpg'

const AlternatingCards = () => {
  const procedures = [
    {
      id: "male-transplant",
      title: "Male Hair Transplant",
      image: male_hair,
      summary: "Advanced solutions for male pattern baldness (Androgenetic Alopecia)",
      overview: `Male hair loss typically follows the Norwood Scale pattern, beginning at the temples or crown. Our DHT transplantation method specifically targets:
      - Permanent donor follicles resistant to hormonal hair loss
      - Natural hairline design matching facial symmetry
      - Proper graft distribution for density that appears natural at all angles`,
      details: `Using microscopic follicular unit extraction (FUE), we harvest individual grafts from the permanent zone (usually the back and sides of the scalp). These DHT-resistant follicles are then implanted into thinning areas with precision angulation to match natural growth patterns. The procedure takes 4-8 hours depending on graft count (typically 1,500-3,000 grafts for moderate loss), with most patients returning to work within 5-7 days. New growth begins at 3-4 months with full results visible at 12-18 months.`,
      results: "90-95% graft survival rate | Natural-looking density | Permanent results"
    },
    {
      id: "female-transplant",
      title: "Female Hair Transplant",
      image: female_hair,
      summary: "Specialized restoration for female pattern hair loss",
      overview: `Female hair loss differs from male pattern baldness, often presenting as:
      - Diffuse thinning across the entire scalp
      - Widening part line
      - Preserved frontal hairline
      Our approach considers:
      - Finer hair shaft characteristics
      - Existing hair preservation
      - Natural density patterns`,
      details: `We use ultra-refined grafts (single and double follicular units) for seamless integration with existing hair. The procedure focuses on enhancing overall density while maintaining natural-looking distribution. Special care is taken to avoid trauma to existing hairs. Women typically require 800-2,000 grafts depending on thinning severity. The Ludwig Scale helps classify female pattern loss and guide treatment planning. Hormonal evaluations are often recommended pre-procedure.`,
      results: "No detectable scarring | Gradual, natural enhancement | Works with existing hair"
    },
    {
      id: "eyebrow-transplant",
      title: "Eyebrow Transplant",
      image: eyebrow,
      summary: "Permanent solution for sparse or over-plucked eyebrows",
      overview: `Eyebrow restoration requires specialized techniques because:
      - Eyebrow hairs grow at unique 45° angles
      - They have a distinct arch pattern
      - Growth cycles differ from scalp hair
      Our method:
      - Uses single hair follicular units
      - Matches natural growth direction
      - Creates proper tapering effect`,
      details: `We typically harvest grafts from the nape of the neck where hair characteristics best match natural eyebrows. About 200-400 grafts per eyebrow are placed to recreate the natural arch and flow. The procedure takes 3-4 hours under local anesthesia. Transplanted eyebrows will initially shed at 2-4 weeks before permanent regrowth begins at 3-4 months. Patients will need occasional trimming as the transplanted hairs grow like normal scalp hair.`,
      results: "Natural-looking arches | Permanent solution | No more cosmetic filling"
    },
    {
      id: "scar-transplant",
      title: "Hair Transplant Over Scar",
      image: over_scar,
      summary: "Camouflage for surgical, trauma, or burn scars",
      overview: `Scar tissue presents unique challenges:
      - Reduced blood supply
      - Different texture than normal scalp
      - Possible nerve damage areas
      Our specialized approach:
      - Pre operation vascular assessment
      - Modified implantation techniques
      - Staggered session planning`,
      details: `We evaluate scar pliability and vascularity before proceeding. In some cases, preliminary treatments like microneedling or fractional laser may improve the recipient site. Grafts are placed at lower density initially (30-40% of normal) to ensure survival, with possible follow-up sessions. Survival rates in scar tissue average 70-85% compared to 90-95% in normal scalp. The procedure helps restore both hair coverage and confidence for patients with scars from accidents, burns, or previous surgeries.`,
      results: "Scar visibility reduced 80-95% | Natural hair growth | Improved texture"
    },
    {
      id: "beard-transplant",
      title: "Beard & Moustache Transplant",
      image: beard_moustache,
      summary: "Complete facial hair restoration",
      overview: `Beard transplantation requires:
      - Understanding natural growth patterns
      - Proper angulation (30 to 45°)
      - Gradual density tapering
      Common applications:
      - Patchy growth
      - Burn victims
      - Gender affirming care
      - Scar camouflage`,
      details: `We extract follicles typically from the scalp (or body if needed) and implant them to match natural beard characteristics. The procedure takes 4-6 hours for full beard restoration (600-1,200 grafts). Special attention is paid to creating natural irregularities - real beards aren't perfectly uniform. The transplanted hairs will grow continuously like scalp hair and require regular trimming. Shaving is possible after 2 weeks, with full growth visible at 9-12 months.`,
      results: "Permanent solution | Natural growth patterns | Undetectable results"
    },
    {
      id: "body-hair-transplant",
      title: "Body Hair Transplant (BHT)",
      image: body_hair,
      summary: "When scalp donor supply is limited",
      overview: `Body hair can supplement scalp donor hair when:
      - Extensive coverage is needed
      - Scalp donor is depleted
      - Repairing previous transplants
      Best donor sources:
      - Chest (most similar to scalp)
      - Beard (high survival rate)
      - Leg/arm hair (finer)`,
      details: `Body hair has different growth cycles than scalp hair (shorter anagen phase), so results appear slightly less dense initially. We typically combine BHT with traditional FUE for optimal coverage. The procedure requires special harvesting techniques due to different follicular structures. About 20-30% of body hairs are in the growing phase at any time, compared to 85-90% of scalp hairs, which affects final density perception. Best for adding supplemental coverage rather than serving as primary donor source.`,
      results: "Expands donor supply | Works with scalp hair | Natural-looking coverage"
    },
    {
      id: "hairline-reconstruction",
      title: "Hairline Reconstruction",
      image: reconstruction,
      summary: "Artistic redesign of the frame to your face",
      overview: `A natural hairline requires:
      - Irregular border (not straight)
      - Gradual density increase
      - Age appropriate position
      - Proper temporal angles
      Our design process:
      - Facial measurements
      - 3D simulation
      - Patient collaboration`,
      details: `We use the Golden Ratio (1:1.618) to determine ideal hairline position based on facial proportions. The reconstructed hairline features a "micro-irregular" border with single-hair grafts creating a soft transition zone. Density builds gradually from 20-25 grafts/cm² at the front to 40-50 grafts/cm² behind. For younger patients, we design with future recession in mind. The procedure typically requires 800-1,500 grafts depending on area covered and desired density.`,
      results: "Frame enhances facial features | Undetectable transition | Long-term planning"
    },
    {
      id: "scalp-micropigmentation",
      title: "Scalp Micropigmentation (SMP)",
      image: scalp,
      summary: "Non-surgical hair density illusion",
      overview: `SMP creates the appearance of:
      - Closely shaved hair
      - Fuller density
      - Camouflaged scars
      Technique involves:
      - Medical-grade pigments
      - Layered dot application
      - Custom needle configurations`,
      details: `Using specialized equipment, we deposit pigment at the dermal layer to simulate hair follicles. Treatment typically requires 2-3 sessions spaced 2 weeks apart. SMP can stand alone or complement hair transplants by adding perceived density between grafts. Results last 4-6 years before needing touch-ups. The procedure works well for all skin types and can camouflage scars, thinning crowns, or add definition to transplanted hairlines. Maintenance involves occasional sun protection and moisturizing.`,
      results: "Instant results | No downtime | Complements transplants"
    },
    {
      id: "repair-transplant",
      title: "Repair of Failed Hair Transplant",
      image: repair,
      summary: "Correcting unsatisfactory previous procedures",
      overview: `Common issues we address:
      - Pluggy or doll's hair appearance
      - Unnatural hairlines
      - Poor growth yield
      - Visible scarring
      Our repair methods:
      - Graft redistribution
      - Scar camouflage
      - Beard-to-scalp transplants`,
      details: `We begin with a comprehensive evaluation of the previous work, assessing graft survival, scarring, and remaining donor supply. Solutions may include: extracting poorly placed grafts and re-implanting them properly, adding new grafts to improve density, or using SMP to soften harsh hairlines. For FUT scars, we can transplant directly into the scar or use FUE to harvest from within the scar tissue. Repair procedures often require multiple sessions spaced 9-12 months apart. The goal is to create natural-looking results while maximizing remaining donor potential.`,
      results: "Natural appearance restored | Scar improvement | Donor preservation"
    }
  ];

  return (
    <div className="space-y-12 overflow-hidden">
      {procedures.map((procedure, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? 'bg-soft-sage/20' : 'bg-ivory-white';
        
        return (
          <div className='py-12 ' id={procedure.id}>
          <div key={procedure.id}  className={`${bgColor} py-12  `}>
            <div className="mx-auto max-w-[95vw] lg:max-w-7xl">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 overflow-hidden">
                  <img 
                    src={procedure.image} 
                    alt={procedure.title} 
                    className="w-full h-auto rounded-lg shadow-md object-cover max-h-96"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-4">
                    {procedure.title}
                  </h2>
                  <pre className="text-lg text-olive-gold mb-4 whitespace-normal">
                    {procedure.summary}
                  </pre>
                  <div className="prose prose-lg text-stone-700 mb-6">
                    <p className="font-medium mb-3">Key Features:</p>
                    <div dangerouslySetInnerHTML={{ __html: procedure.overview.replace(/-/g, `<br> •`) }} />
                  </div>
                </div>
              </div>

              {/* Additional Details Section */}
              <div className="mt-8 max-w-5xl mx-auto">
                <div className="prose prose-lg text-stone-600">
                  <p>{procedure.details}</p>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border border-soft-sage">
                  <p className="font-semibold text-forest-green">Expected Results:</p>
                  <p className="text-stone-600">{procedure.results}</p>
                </div>
                
              </div>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlternatingCards;