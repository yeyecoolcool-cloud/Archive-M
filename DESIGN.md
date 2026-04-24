
# Design System: Archival & Relational Minimalist

## 1. Visual Theme & Atmosphere

Inspired by **Archival Consciousness** and **Biblio-graph**, this design system treats the web interface as a digital repository or a living index. It eschews the "commercial warmth" of Airbnb for a **clinical, high-contrast, and structural** atmosphere. The focus is on the relationship between data points—lines, grids, and monochromatic scales that emphasize hierarchy and connectivity over photography.

The core philosophy is **Radical Transparency**. The underlying grid is often visible (using borders rather than shadows), and the interface behaves like a blueprint or a ledger. Interaction is snappy and utilitarian. Instead of rounded, "friendly" corners, this system utilizes **sharp 0px radii** and **hairline borders** (`1px`) to create a sense of precision and academic rigor.

**Key Characteristics:**
- **Monochromatic Foundation**: Stark white (`#FFFFFF`) or light "Paper" gray (`#F5F5F5`) with pitch black (`#000000`) text.
- **The "Blueprint" Grid**: 1px solid borders serve as the primary organizational tool, replacing shadows and depth.
- **Monospaced Accents**: Use of `Monospace` fonts for metadata, IDs, and technical details to evoke a database feel.
- **No Border Radius**: Strict 0px corners for buttons, cards, and containers.
- **Relational Lines**: SVG connectors or CSS borders that visually link interactive elements (as seen in graph visualizations).
- **Inverted Hover States**: Interaction is signaled by inverting colors (black background/white text) rather than subtle lifts.

## 2. Color Palette & Roles

### Core Neutrals
- **Ink Black** (`#000000`): Primary text, borders, and active backgrounds.
- **Paper White** (`#FFFFFF`): Primary background and inverted text.
- **Ghost Gray** (`#E5E5E5`): Tertiary borders, disabled states, and grid lines.
- **Archive Beige** (`#FBF9F6`): Optional background tint to reduce eye strain (simulating aged paper).

### Semantic Accents (Used Sparingly)
- **Reference Blue** (`#0000FF`): Traditional "hyperlink" blue, used only for external citations or "connected" nodes.
- **Alert Red** (`#FF0000`): Used for deletions or critical system errors.

### Interaction States
- **Hover**: Background: `#000000` | Text: `#FFFFFF`
- **Active/Selected**: 1px solid `#000000` outline with a subtle `#F0F0F0` fill.

## 3. Typography Rules

### Font Family
- **Primary (Serif)**: A high-contrast Serif (e.g., `Times New Roman`, `IBMPlexSerif`) for body text to maintain an "archival" or "literary" feel.
- **Secondary (Sans/Mono)**: `IBM Plex Mono` or `JetBrains Mono` for UI elements, buttons, and data labels.

### Hierarchy

| Role | Font | Size | Weight | Case | Notes |
|------|------|------|--------|------|-------|
| **Site Title** | Serif | 32px | 700 | Sentence | Large, bold, authoritative. |
| **Node Title** | Sans/Mono | 18px | 600 | Uppercase | Used in cards and graph nodes. |
| **Metadata** | Mono | 12px | 400 | Uppercase | For dates, IDs, and categories. |
| **Body Text** | Serif | 16px | 400 | Sentence | High readability, generous leading. |
| **Button UI** | Mono | 14px | 500 | Uppercase | Tactile and functional. |

### Principles
- **Extreme Leading**: Use `line-height: 1.6` for body text to allow the "page" to breathe.
- **No Kerning adjustments**: Keep tracking at `0` or `1px` for Mono fonts to maintain the "typewriter" aesthetic.

## 4. Component Stylings

### Buttons & Inputs
- **Style**: Rectangle, 1px solid `#000000`.
- **Radius**: `0px`.
- **Interaction**: On hover, background becomes `#000000` and text becomes `#FFFFFF`.
- **Padding**: `8px 16px` for a compact, utilitarian feel.

### Cards (The "Archive Box")
- **Border**: 1px solid `#000000`.
- **Shadow**: None. Use a "double border" effect (a second 1px border with a 4px offset) if depth is absolutely needed.
- **Header**: Separated from the body by a 1px horizontal line.

### Connectors & Graphs
- **Stroke**: 1px or 0.5px.
- **Color**: `#000000` or `#CCCCCC`.
- **Behavior**: Straight lines or "Manhattan" (90-degree) routing. Avoid smooth Bezier curves to keep the "schematic" look.

## 5. Layout & Spacing

### The Grid System
- **Hard Grids**: Elements should snap to an 8px or 10px module. 
- **Visible Dividers**: Use vertical and horizontal rules (`<hr>`) to define layout sections instead of whitespace alone.
- **Density**: High information density is acceptable, provided the hierarchy is clear.

### Spacing Scale
- `4px`, `8px`, `16px`, `32px`, `64px`.

## 6. Depth & Elevation

In an archival system, **Depth is represented by X/Y coordinates and lines, not Z-index shadows.**

| Level | Treatment | Use |
|-------|-----------|-----|
| **Base** | Paper White | Main workspace. |
| **Overlay** | 1px Solid Border + White Fill | Modals or tooltips (must have a sharp 1px border). |
| **Active** | Black Fill | Selected nodes or buttons. |

## 7. Do's and Don'ts

### Do
- Use **1px borders** to define all interactive areas.
- Prioritize **Monospaced fonts** for any data coming from your codex.
- Use **sharp corners** (0px radius) everywhere.
- Lean into a **brutalist/minimalist** aesthetic.

### Don't
- **No Border Radii**: Do not use `border-radius`.
- **No Soft Shadows**: Avoid `box-shadow` unless it's a hard-edged "block" shadow.
- **No Gradients**: Use flat colors only.
- **No "Friendly" UI**: Avoid rounded icons or bubbly animations.

## 8. Agent Prompt Guide (For your Codex)

- "Render a data entry card: White background, 1px solid black border, 0px border-radius. Top section contains a label in 12px Mono Uppercase; bottom section contains a description in 16px Serif."
- "Create a navigation menu using only vertical 1px lines as separators. Text should be 14px Mono. On hover, the menu item background should turn black and text should turn white."
- "Draw a relational graph: Nodes are rectangular boxes with 1px borders. Connections are sharp-angled 1px black lines."
- "Style a search input: 1px solid black bottom-border only, no background, 14px Mono font."

---

### One final tip for your interaction: 
Since you are using a **codex**, consider adding a **"Terminal" or "Log"** component at the bottom of the screen that prints system actions in `12px Mono`—this reinforces the "Archival/System" feel of the websites you referenced. 
