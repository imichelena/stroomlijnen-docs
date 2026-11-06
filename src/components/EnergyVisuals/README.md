# Energy visuals

Reusable React visual explanations for Docusaurus MDX. Components use the current Docusaurus locale by default and accept an explicit `locale="nl"` or `locale="en"` override.

```mdx
import {CapacityExplorer, DayFlow, ControlArchitecture} from '@site/src/components/EnergyVisuals';

<CapacityExplorer />
<DayFlow locale="nl" />
<ControlArchitecture />
```

- **CapacityExplorer** is a responsive editorial chart with a controlled range input. Its simplified model uses a configured 100 kW site power limit, a 70 kW charging request and 10–90 kW building demand. It excludes solar, storage, phase loading, vehicle limits and departure planning. The bar, numeric labels and accessible explanation update together. The configured limit is explicitly distinguished from physical connection capacity and contracted transport capacity.
- **DayFlow** shows the same rendered campus in morning, midday and evening light. Three keyboard tabs select responsive images with a fixed aspect ratio and subtle crossfade. Power routes are presented separately below the image, without invented cables over the scene. Animation can be paused; reduced-motion settings disable motion. The renders and routes are illustrative, not telemetry or a product configuration.
- **ControlArchitecture** uses a rendered campus for context and three compact, semantic flow bands: electrical power, local control and platform data. It does not imply direct cloud control of chargers. On narrow screens, the cards stack vertically and their arrows follow the reading direction.

Images live at `static/images/scenes/campus-{morning,midday,evening}-{640,960,1536}.webp`. Image URLs use Docusaurus `useBaseUrl`; no remote image service is required. React `useId` keeps labels and controls unique across multiple instances and server rendering. Styling is scoped through a CSS module, including dark mode. Detailed protocol diagrams in `ArchitectureDiagram` are separate and unchanged.

Validate both locales and light/dark themes in the parent documentation build. The associated article remains the source for installation-specific boundaries.
