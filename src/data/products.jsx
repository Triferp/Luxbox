// This file is the single source of truth for all product data.
export const allProducts = [
  // Lights -> LED Panel Lights
  { 
    id: 'L-PL-001', category: 'lights', subcategory: 'led-panel-lights', name: 'Atom Concealed Panel', 
    spec: 'Bright, energy-efficient concealed lighting.', 
    image: '/Products/Atom Concealed.png', modelCode: 'LXB-PL-AT-12W', 
    specifications: [
      { label: 'Type', value: 'Concealed Downlight' },
      { label: 'Wattage', value: '7W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
      { label: 'Color', value: 'Red/Green/Blue/Pink' },
      { label: 'Shape', value: 'Round' },
    ] 
  },
  { 
    id: 'L-PL-002', category: 'lights', subcategory: 'led-panel-lights', name: 'Shine Concealed Panel', 
    spec: 'Sleek and modern concealed lighting.', 
    image: '/Products/Shine concealed.png', modelCode: 'LXB-PL-SH-15W', 
    specifications: [
      { label: 'Type', value: 'Concealed Downlight' },
      { label: 'Wattage', value: '10W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
      { label: 'Color', value: 'Red/Green/Blue/Pink' },
      { label: 'Shape', value: 'Round' },
    ] 
  },
  { 
    id: 'L-PL-003', category: 'lights', subcategory: 'led-panel-lights', name: 'Sleek Surface Panel', 
    spec: 'Minimalist surface-mounted panel.', 
    image: '/Products/Sleek sq.png', modelCode: 'LXB-PL-SL-18W', 
    specifications: [
      { label: 'Type', value: 'Surface Downlight' },
      { label: 'Wattage', value: '8W/12W/16W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
      { label: 'Shape', value: 'Round' },
    ] 
  },
  { 
    id: 'L-PL-004', category: 'lights', subcategory: 'led-panel-lights', name: 'Brighter Panel', 
    spec: 'High-intensity panel for commercial spaces.', 
    image: '/Products/brighter panel sq.png', modelCode: 'LXB-PL-BR-22W', 
    specifications: [
      { label: 'Type', value: 'Surface Downlight' },
      { label: 'Wattage', value: '8W/12W/16W' },
      { label: 'Lumen Output', value: '3000k/4000k/6500k' },
      { label: 'Shape', value: 'Square/Round' },
    ] 
  },
  
  // Lights -> Outdoor Lights
  { 
    id: 'L-OL-001', category: 'lights', subcategory: 'outdoor-lights', name: 'Rope Light', 
    spec: 'Flexible, decorative outdoor lighting.', 
    image: '/Products/Rope Light.png', modelCode: 'LXB-OL-RP-5M', 
    specifications: [
      { label: 'Type', value: 'LED Rope Light' },
      { label: 'Length', value: '50 Meters' },
      { label: 'CCT', value: '3000k/4000k' },
      { label: 'Color', value: 'Red/Blue/Green/Pink/Purple/Ice Blue' },
    ] 
  },
  { 
    id: 'L-OL-002', category: 'lights', subcategory: 'outdoor-lights', name: 'Flasho Flood Light', 
    spec: 'Powerful illumination for large areas.', 
    image: '/Products/Flood Light.png', modelCode: 'LXB-OL-FL-50W', 
    specifications: [
      { label: 'Type', value: 'Flood Light' },
      { label: 'Wattage', value: '50W/100W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
    ] 
  },
  { 
    id: 'L-OL-003', category: 'lights', subcategory: 'outdoor-lights', name: 'Venus Street Light', 
    spec: 'Durable and efficient street lighting.', 
    image: '/Products/light-pc-4.png', modelCode: 'LXB-OL-ST-100W', 
    specifications: [
      { label: 'Type', value: 'Street Light' },
      { label: 'Wattage', value: '50W/100W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
    ] 
  },
  
  // Lights -> Profile Lights
  { 
    id: 'L-PR-001', category: 'lights', subcategory: 'profile-lights', name: '30 x 10 mm', 
    spec: 'For general surface and recessed lighting.', 
    image: '/Products/LB-259.png', modelCode: 'LXB-PR-3010', 
    specifications: [
      { label: 'Type', value: 'Aluminum Profile' },
      { label: 'Dimensions', value: '30mm x 10mm' },
      { label: 'Shape', value: 'Rectangle' },
    ] 
  },
  { 
    id: 'L-PR-002', category: 'lights', subcategory: 'profile-lights', name: '23 x 10 mm', 
    spec: 'For integrated cabinetry and shelf lighting.', 
    image: '/Products/LB-438.png', modelCode: 'LXB-PR-2310', 
    specifications: [
      { label: 'Type', value: 'Aluminum Profile' },
      { label: 'Dimensions', value: '23mm x 10mm' },
      { label: 'Shape', value: 'Rectangle' },
    ] 
  },
  { 
    id: 'L-PR-003', category: 'lights', subcategory: 'profile-lights', name: '30 mm', 
    spec: 'Deeper profile for perfectly dot-free light.', 
    image: '/Products/LB-290.png', modelCode: 'LXB-PR-2310', 
    specifications: [
      { label: 'Type', value: 'Aluminum Profile' },
      { label: 'Dimensions', value: '30mm' },
      { label: 'Shape', value: 'Round' },
    ] 
  },
  { 
    id: 'L-PR-004', category: 'lights', subcategory: 'profile-lights', name: '50 x 35 mm', 
    spec: 'For suspended lighting and architectural statements.', 
    image: '/Products/LB-5035A.png', modelCode: 'LXB-PR-2310', 
    specifications: [
      { label: 'Type', value: 'Aluminum Profile' },
      { label: 'Dimensions', value: '50mm x 35mm' },
      { label: 'Shape', value: 'Rectangle' },
    ] 
  },
  { 
    id: 'L-PR-005', category: 'lights', subcategory: 'profile-lights', name: '17 x 8.8 mm', 
    spec: 'For discreet cove and under-cabinet lighting.', 
    image: '/Products/LB508Eco.png', modelCode: 'LXB-PR-2310', 
    specifications: [
      { label: 'Type', value: 'Aluminum Profile' },
      { label: 'Dimensions', value: '17 x 8.8 mm' },
      { label: 'Shape', value: 'Rectangle' },
    ] 
  },
  { 
    id: 'L-PR-006', category: 'lights', subcategory: 'profile-lights', name: '20 x 15 mm', 
    spec: 'A compact profile for enhanced diffusion.', 
    image: '/Products/APL-R433.png', modelCode: 'LXB-PR-2310', 
    specifications: [
      { label: 'Type', value: 'Aluminum Profile' },
      { label: 'Dimensions', value: '20 x 15 mm' },
      { label: 'Shape', value: 'Rectangle' },
    ] 
  },
  { 
    id: 'L-PR-007', category: 'lights', subcategory: 'profile-lights', name: '17 x 7 mm', 
    spec: 'For fine details and edge-lit designs.', 
    image: '/Products/APL-R164.png', modelCode: 'LXB-PR-2310', 
    specifications: [
      { label: 'Type', value: 'Aluminum Profile' },
      { label: 'Dimensions', value: '17mm x 7mm' },
      { label: 'Shape', value: 'Rectangle' },
    ] 
  },
  
  // Lights -> COB Downlights
  { 
    id: 'L-CD-001', category: 'lights', subcategory: 'cob-downlights', name: 'Luxbox Sharp COB', 
    spec: 'Focused and sharp COB lighting.', 
    image: '/Products/Sharp.png', modelCode: 'LXB-CD-12W-SH', 
    specifications: [
      { label: 'Type', value: 'COB Downlight' },
      { label: 'Wattage', value: '3W/6W/12W/20W/30W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
      { label: 'Shape', value: 'Round' },
    ] 
  },
  { 
    id: 'L-CD-002', category: 'lights', subcategory: 'cob-downlights', name: 'Sharp Plus COB', 
    spec: 'Enhanced brightness and sharpness.', 
    image: '/Products/Shine COB.png', modelCode: 'LXB-CD-15W-SHP', 
    specifications: [
      { label: 'Type', value: 'COB Downlight' },
      { label: 'Wattage', value: '30W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
      { label: 'Shape', value: 'Round' },
    ] 
  },
  { 
    id: 'L-CD-003', category: 'lights', subcategory: 'cob-downlights', name: 'Grace COB', 
    spec: 'Sleek, modern, and powerful.', 
    image: '/Products/grace COB.png', modelCode: 'LXB-CD-08W-GR',
    specifications: [
      { label: 'Type', value: 'COB Downlight' },
      { label: 'Wattage', value: '7W/12W/18W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
      { label: 'Shape', value: 'Round' },
    ]
  },
  { 
    id: 'L-CD-004', category: 'lights', subcategory: 'cob-downlights', name: 'DON Track COB', 
    spec: 'Versatile track lighting solution.', 
    image: '/Products/Don Track.png', modelCode: 'LXB-TR-10W-DN', 
    specifications: [
      { label: 'Type', value: 'COB Track Light' },
      { label: 'Wattage', value: '9W/16W/30W/40W' },
      { label: 'CCT', value: '3000k/4000k/6500k' },
      { label: 'Adaptability', value: 'Surface/Track' },
    ] 
  },
  
  // Lights -> Strip Lights & Drivers
  { 
    id: 'L-SL-001', category: 'lights', subcategory: 'strip-light-drivers', name: 'Strip Light', 
    spec: 'Flexible strip for accent lighting.', 
    image: '/Products/Strips.png', modelCode: 'LXB-SL-120D-5M', 
    specifications: [
      { label: 'Type', value: 'LED Strip' },
      { label: 'LEDs per Meter', value: '60/120/240' },
      { label: 'Voltage', value: '12V' },
      { label: 'Wattage', value: '10W' },
      { label: 'Color', value: 'RGB/Static White' },
    ] 
  },
  { 
    id: 'L-SL-002', category: 'lights', subcategory: 'strip-light-drivers', name: 'Strip Light Drivers', 
    spec: 'Reliable power for your LED strips.', 
    image: '/Products/Drivers.png', modelCode: 'LXB-DRV-60W-12V', 
    specifications: [
      { label: 'Type', value: 'LED Driver' },
      { label: 'Voltage', value: '12V' },
      { label: 'Wattage', value: '24W/36W/48W/60W/120W/240W' },
    ] 
  },
  
  // Wires -> HRFR PVC Cables
  { 
    id: 'W-HR-001', category: 'wires', subcategory: 'hrfr-pvc-cables', name: 'HRFR PVC Insulated Industrial Cable', 
    spec: 'Industrial grade, heat and flame retardant.', 
    image: '/Products/Wires.png', modelCode: 'LXB-W-HRFR-1.5',
    specifications: [
      { label: 'Size (in sq.mm)', value: '0.75/1.00/1.50/2.50/4.00/6.00/10.00' },
      { label: 'Insulation Type', value: 'Heat Resistant & Flame Retardant' },
    ]
  },
  
  // Switches & Gears -> Modular Switches & Accessories
  { 
    id: 'S-MA-001', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'VX Plates', 
    spec: 'A frame of distinction for your walls.', 
    image: '/Products/VX Plate.png', modelCode: 'LXB-SP-02M', 
    specifications: [
      { label: 'Type', value: 'Switch Plate' },
      { label: 'Module', value: '1MOD./2MOD./3MOD./4MOD./6MOD./8M SQ./8M HOZ./12MOD./18MOD.' },
      { label: 'Finish', value: 'Gloss White' },
    ] 
  },
  { 
    id: 'S-MA-002', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Lexa Plates', 
    spec: 'Sleek profiles for a minimalist aesthetic.', 
    image: '/Products/Lexa Plate.png', modelCode: 'LXB-SP-02M', 
    specifications: [
      { label: 'Type', value: 'Switch Plate' },
      { label: 'Module', value: '1MOD./2MOD./3MOD./4MOD./6MOD./8M SQ./8M HOZ./12MOD./18MOD.' },
      { label: 'Finish', value: 'Gloss White' },
    ] 
  },
  { 
    id: 'S-MA-003', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Meteor Switch', 
    spec: 'A flash of brilliance in every touch.', 
    image: '/Products/Meteor Switch.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '10A. 1 Way Meteor Switch', value: '' },
      { label: '10A. 2 Way Meteor Switch', value: '' },
      { label: '10A. Bellpush Meteor 1M', value: '' },
      { label: '20A. 1 Way Meteor Switch', value: '' },
      { label: '20A. 2 Way Meteor Switch', value: '' },
    ]
  },
  { 
    id: 'S-MA-004', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Cube Switch', 
    spec: 'Modern design, perfectly defined', 
    image: '/Products/Cube Switch.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '10A. 1 Way Cube Switch', value: '' },
      { label: '10A. 2 Way Cube Switch', value: '' },
      { label: '10A. Bellpush Cube 1M', value: '' },
      { label: '20A. 1 Way Cube Switch', value: '' },
      { label: '20A. 2 Way Cube Switch', value: '' },
    ]
  },
  { 
    id: 'S-MA-005', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Switches', 
    spec: 'Connect your world with elegance and ease.', 
    image: '/Products/Switches.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '20A. Bellpush 2M', value: '' },
      { label: '20A. Switch with Indicator', value: '' },
      { label: '32A. D.P. Switch with Indicator', value: '' },
    ]
  },
  { 
    id: 'S-MA-006', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Sockets', 
    spec: ' Reliable power, seamlessly integrated.', 
    image: '/Products/Sockets.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '6A. 2 Pin Socket', value: '' },
      { label: '6A. 3 Pin Socket', value: '' },
      { label: '6/16A. Multi Socket', value: '' },
      { label: '13A. International Socket', value: '' },
      { label: '6/16A. Multi Socket(PORC)', value: '' },
      { label: '25A Socket', value: '' },
    ]
  },
  { 
    id: 'S-MA-007', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Dimmers and Fan Regulators', 
    spec: 'Precision control for your ideal comfort zone.', 
    image: '/Products/Dimmers.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: 'Regulator 4 Step 1M', value: '' },
      { label: 'Regulator 5 Step 2M', value: '' },
    ]
  },
  { 
    id: 'S-MA-008', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Protection Device', 
    spec: 'Essential protection for every circuit.', 
    image: '/Products/Motor Starter.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '32A. Motor Starter', value: '' },
    ]
  },
  { 
    id: 'S-MA-009', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Hotel Accessories', 
    spec: 'Enhancing the guest experience with intuitive control.', 
    image: '/Products/Hotel.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '32A. D.P. with Hotel Key Tag', value: '' },
      { label: 'Only Keytag', value: '' },
    ]
  },
  { 
    id: 'S-MA-010', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'LED Lightings', 
    spec: 'Subtle illumination for clear indication.', 
    image: '/Products/LED Lightings.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: 'Footlight 2M', value: '' },
      { label: 'Footlight 3M', value: '' },
    ]
  },
  { 
    id: 'S-MA-011', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Single Pole MCB', 
    spec: 'The building blocks for your perfect setup.', 
    image: '/Products/spmcb.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '6A. SP MCB', value: '' },
      { label: '10A. SP MCB', value: '' },
      { label: '25A. SP MCB', value: '' },
      { label: '32A. SP MCB', value: '' },
    ]
  },
  { 
    id: 'S-MA-012', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Double Pole MCB (DP)', 
    spec: 'Complete circuit isolation for superior safety.', 
    image: '/Products/dpmcb.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: '6A. SP MCB', value: '' },
      { label: '10A. SP MCB', value: '' },
      { label: '25A. SP MCB', value: '' },
      { label: '32A. SP MCB', value: '' },
    ]
  },
  { 
    id: 'S-MA-013', category: 'switches-and-gears', subcategory: 'modular-switches-accessories', name: 'Other Modules', 
    spec: 'Customize your connections for ultimate convenience.', 
    image: '/Products/Other Modules.png', modelCode: 'LXB-S-MT-10A', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: 'Indicator', value: '' },
      { label: 'TV Socket', value: '' },
      { label: 'T.F. Jack', value: '' },
      { label: 'RJ 45 Computer Jack', value: '' },
      { label: 'Blank 1M', value: '' },
      { label: 'USB Charger', value: '' },
    ]
  },
  
  // Switches & Gears -> Switch Gears
  { 
    id: 'S-SG-001', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'G I Junction Box', 
    spec: 'General Purpose Junction Box.', 
    image: '/Products/Junction Box.png', modelCode: 'LXB-JB-GP-44', 
    specifications: [
      { label: 'Type', value: 'Junction Box' },
      { label: 'Material', value: 'Galvanized Iron' },
    ] 
  },
  { 
    id: 'S-SG-002', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'G I Modular Box', 
    spec: 'For Flush Mounting of Modular Plates.', 
    image: '/Products/Modular Box.png', modelCode: 'LXB-MB-GI-02M', 
    specifications: [
      { label: 'Type', value: 'Modular Box' },
      { label: 'Material', value: 'Galvanized Iron' },
      { label: 'Module', value: '1MOD./2MOD./3MOD./4MOD./6MOD./8M SQ./8M HOZ./12MOD./18MOD.' },
    ] 
  },
  { 
    id: 'S-SG-003', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'Fan Box', 
    spec: 'Heavy-duty metal box for ceiling fan installation.', 
    image: '/Products/Fan Box.png', modelCode: 'LXB-MB-GI-02M', 
    specifications: [
      { label: 'Type', value: 'Modular Box' },
      { label: 'Material', value: 'Galvanized Iron' },
    ] 
  },
  { 
    id: 'S-SG-004', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'Concealed Box', 
    spec: 'For a clean, professional, and flush installation.', 
    image: '/Products/Concealed Box.png', modelCode: 'LXB-MB-GI-02M', 
    specifications: [
      { label: 'Type', value: 'Modular Box' },
      { label: 'Material', value: 'Galvanized Iron' },
    ] 
  },
  { 
    id: 'S-SG-005', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'Cassing', 
    spec: 'Elegant and durable casing for your surface wiring.', 
    image: '/Products/Cassing.png', modelCode: 'LXB-MB-GI-02M', 
    specifications: [
      { label: 'Type', value: 'Light Accessory' },
      { label: 'Size', value: '30 x 15 mm' },
    ] 
  },
  { 
    id: 'S-SG-006', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'Cassing Accessories', 
    spec: 'Everything you need for a flawless casing installation.', 
    image: '/Products/Cassing accessories.png', modelCode: 'LXB-MB-GI-02M', 
    specifications: [
      { label: 'Items:', value: '' },
      { label: 'Tee', value: '' },
      { label: 'Internal', value: '' },
      { label: 'External', value: '' },
      { label: 'Elbow', value: '' },
      { label: 'Jointer', value: '' },
      { label: '1 Way', value: '' },
      { label: '2 Way', value: '' },
      { label: '3 Way', value: '' },
      { label: '4 Way', value: '' },
    ] 
  },
  { 
    id: 'S-SG-007', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'Batten Holder', 
    spec: 'Securely mount your lighting, simply and effectively.', 
    image: '/Products/Batten Holder.png', modelCode: 'LXB-MB-GI-02M', 
    specifications: [
      { label: 'Type', value: 'Light Accessory' },
    ] 
  },
  { 
    id: 'S-SG-008', category: 'switches-and-gears', subcategory: 'switch-gears', name: 'Wire Clips', 
    spec: 'Neatly manage and secure your wiring paths.', 
    image: '/Products/Wire Clips.png', modelCode: 'LXB-MB-GI-02M', 
    specifications: [
      { label: 'Type', value: 'Wire Accessory' },
      { label: 'Size (in mm)', value: '4/6/8/10/12/16/20/25/Oval' },
    ] 
  },
];

// Define which products to show on the homepage by their ID.
export const featuredProductIds = ['L-CD-003', 'W-HR-001', 'S-MA-002'];