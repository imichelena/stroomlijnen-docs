export type Locale = 'nl' | 'en';

export const strings = {
 nl: {
  model: 'Illustratief model', pause: 'Animatie pauzeren', play: 'Animatie afspelen',
  capacity: {
   eyebrow: 'Vermogen verdelen', title: 'Een vast vermogensplafond. Een verdeling die meebeweegt.',
   label: 'Hoeveel vraagt uw gebouw?', quiet: 'Rustig moment', busy: 'Drukke werkdag',
   help: 'Verschuif het gebouwverbruik. De beschikbare ruimte voor laden verandert mee.',
   connection: 'kW plafond', building: 'kW gebouw', available: 'kW beschikbaar',
   chartTitle: 'Verdeling binnen een ingesteld vermogensplafond van 100 kW', limit: '100 kW · ingesteld plafond',
   charging: 'Laden', buildingLabel: 'Gebouw', now: 'Verbruik op dit moment', total: 'Totale afname',
   request: (value: number) => `${value} van 70 kW gevraagd`,
   spare:'Beschikbare ruimte',
   value: (building: number, charging: number) => `${building} kilowatt gebouwverbruik; ${charging} kilowatt voor laden`,
   description: (building: number, charging: number, total: number) => `Het gebouw gebruikt ${building} kW en de laders ${charging} kW. De totale afname van ${total} kW blijft binnen het ingestelde vermogensplafond van 100 kW.`,
   result: (building: number, charging: number, delayed: number, spare: number) => delayed > 0
    ? `Het gebouw vraagt ${building} kW. Er is ${charging} kW voor laden. Het laden gaat tijdelijk met ${delayed} kW minder vermogen dan gevraagd; dezelfde hoeveelheid energie vraagt daardoor meer tijd.`
    : `Het gebouw vraagt ${building} kW. De volledige laadvraag van 70 kW past binnen het ingestelde vermogensplafond; er blijft ${spare} kW ruimte over.`,
   note: 'Vereenvoudigd rekenvoorbeeld, geen meetgegevens of locatieadvies. Ingesteld vermogensplafond: 100 kW. Vaste laadvraag: 70 kW; geen zon of batterij. Dit plafond is niet hetzelfde als de fysieke aansluitcapaciteit of het gecontracteerde transportvermogen. Fasebelasting, veiligheidsmarges, voertuiggrenzen en laadplanning zijn hier niet meegenomen.'
  },
  day: {
   eyebrow: 'Energie bewaren', title: 'Dezelfde locatie. Een ander moment.', tabsLabel: 'Moment van de dag',
   battery: 'Batterij', building: 'Gebouw + zonnedak', charging: 'Laden',
   imageAlt:'Illustratieve bedrijfsomgeving met zonnedak, batterijopslag, gebouw en elektrische voertuigen.',
   sceneCaption:'Eén illustratieve locatie. Drie momenten op de dag.',
   routeLabel:'Stroomroute in dit voorbeeld',grid:'Net',solar:'Zon',site:'Gebouw & laden',storage:'Batterij',
   routeNotes:['Het net levert de energie die de locatie nodig heeft.','Eigen opwek wordt direct gebruikt; een overschot kan naar de batterij.','Opgeslagen energie helpt mee; het net vult aan waar nodig.'],
   periods: [
    {time:'08:00',label:'Opstarten',heading:'De werkdag komt op gang.',text:'Gebouw en voertuigen vragen energie terwijl de zon nog weinig levert. Het EMS verdeelt de beschikbare ruimte. De batterij blijft in dit voorbeeld beschikbaar voor later.',svgTitle:'Gebouw en voertuigen delen bij de start van de werkdag de beschikbare energie.'},
    {time:'13:00',label:'Zon benutten',heading:'Gebruik de zon. Bewaar het overschot.',text:'Zonnestroom gaat direct naar uw gebouw en voertuigen. Is er meer opwek dan verbruik? Dan kan de batterij energie bewaren voor later.',svgTitle:'Eigen zonnestroom wordt gebruikt op de locatie; een overschot kan naar de batterij.'},
    {time:'18:00',label:'Piek opvangen',heading:'Een druk moment, met een buffer.',text:'De zon levert minder, maar het bedrijf draait nog door. Eerder opgeslagen energie kan helpen de piek op te vangen, zolang de batterij voldoende lading en vermogen heeft.',svgTitle:'De batterij levert eerder opgeslagen energie terug aan de locatie.'}
   ],
   note:'Illustratieve locatie en stroomroutes, geen meetgegevens of productconfiguratie. Inzet van opslag hangt af van opwek, verbruik, batterijvermogen en beschikbare lading. Het net kan op ieder moment aanvullen waar nodig.'
  },
  architecture: {
   eyebrow:'Meten & besturen',title:'De kabel levert stroom. Het EMS verdeelt het laadbudget.',
   power:'Elektrisch vermogen',control:'Meting / besturing',data:'Gegevens voor beheer',
   scroll:'Veeg horizontaal om het volledige schema te bekijken.',region:'Schema van elektrisch vermogen, lokale besturing en platformgegevens; horizontaal te verkennen',
   svgTitle:'Elektrisch vermogen en lokale besturing hebben een eigen route.',
   description:'Elektrisch vermogen loopt van het net via de meter en verdeler naar gebouw en laders. Het lokale EMS ontvangt metingen en begrenst het laadvermogen. Gegevens gaan via de lokale netwerkgrens naar het platform voor inzicht en beheer. Dit schema toont geen directe besturing van laders vanuit de cloud.',
   local:'OP UW LOCATIE',platform:'PLATFORM',meter:'Net + meter',distribution:'Verdeler',ems:'Lokaal EMS',emsSub:'Meten → sturen',building:'Gebouw',chargers:'Laders',overview:'Inzicht & beheer',boundary:'Netwerkgrens',measurement:'Metingen',budget:'Laadbudget',
   platformLines:['Sessies en locatiegegevens','maken gebruik zichtbaar.','De regeling blijft lokaal.'],
   steps:[
    ['De meter meet.','Actuele metingen maken de beschikbare ruimte zichtbaar.'],
    ['Het EMS verdeelt.','De lokale besturing past het laadbudget aan de locatiegrenzen aan.'],
    ['Het platform toont.','Sessies en locatiegegevens ondersteunen het beheer.']
   ],
   imageAlt:'Een illustratieve bedrijfslocatie met laden, gebouw, zonnedak en batterijopslag.',
   contextLabel:'Eén locatie, drie verschillende routes',contextTitle:'Wat levert stroom? Wat geeft een opdracht?',
   contextText:'De fysieke installatie, de lokale regeling en het platform hebben elk een eigen taak.',
   layerTitles:['Elektrisch vermogen','Lokale besturing','Gegevens voor beheer'],
   layerDescriptions:['Stroom loopt via de elektrische installatie naar de verbruikers.','Metingen worden vertaald naar een lokaal laadbudget.','Locatiegegevens gaan via de netwerkgrens naar het platform.'],
   nodes:[
    [['Net + meter','Aanvoer en meting'],['Verdeler','Elektrische installatie'],['Gebouw + laders','Verbruik op locatie']],
    [['Metingen','Actuele situatie'],['Lokaal EMS','Berekent het laadbudget'],['Laadbudget','Laders passen zich aan']],
    [['Locatiegegevens','Sessies en gebruik'],['Netwerkgrens','Gescheiden communicatie'],['Inzicht & beheer','Overzicht in het platform']]
   ],
   note:'Illustratieve locatie met een functioneel schema, geen bedradings- of netwerktekening. Alleen de besproken routes zijn getoond; zon en opslag zijn niet uitgewerkt. De platformroute toont gegevens voor beheer, geen directe besturing van laders vanuit de cloud. Protocolpaden, autorisatie en storingsgedrag verschillen per installatie.'
  }
 },
 en: {
  model:'Illustrative model',pause:'Pause animation',play:'Play animation',
  capacity: {
   eyebrow:'Sharing available power',title:'A fixed power limit. A changing allocation.',
   label:'How much does your building need?',quiet:'Quiet moment',busy:'Busy working day',
   help:'Adjust building demand. The power available for charging changes with it.',
   connection:'kW site limit',building:'kW building',available:'kW available',
   chartTitle:'Sharing a configured 100 kW site power limit',limit:'100 kW · configured limit',
   charging:'Charging',buildingLabel:'Building',now:'Demand at this moment',total:'Total grid draw',
   request:(value:number)=>`${value} of 70 kW requested`,spare:'Available headroom',
   value:(building:number,charging:number)=>`${building} kilowatts building demand; ${charging} kilowatts for charging`,
   description:(building:number,charging:number,total:number)=>`The building uses ${building} kW and chargers use ${charging} kW. Total grid draw is ${total} kW, within the configured 100 kW site power limit.`,
   result:(building:number,charging:number,delayed:number,spare:number)=>delayed>0
    ? `The building needs ${building} kW. There is ${charging} kW for charging. Charging temporarily uses ${delayed} kW less power than requested; delivering the same amount of energy therefore takes more time.`
    : `The building needs ${building} kW. The full 70 kW charging demand fits within the configured site power limit, leaving ${spare} kW available.`,
   note:'Simplified example, not measured data or site advice. Configured site power limit: 100 kW. Fixed charging demand: 70 kW; no solar or battery. This limit is distinct from physical connection capacity and contracted transport capacity. Phase loading, safety margins, vehicle limits and departure planning are not included.'
  },
  day: {
   eyebrow:'Storing energy',title:'The same site. A different moment.',tabsLabel:'Time of day',
   battery:'Battery',building:'Building + solar roof',charging:'Charging',
   imageAlt:'Illustrative business site with rooftop solar, battery storage, a building and electric vehicles.',
   sceneCaption:'One illustrative site. Three moments in the day.',
   routeLabel:'Power flow in this example',grid:'Grid',solar:'Solar',site:'Building & charging',storage:'Battery',
   routeNotes:['The grid supplies the energy the site needs.','Solar energy is used directly; any surplus can charge the battery.','Stored energy contributes; the grid supplies more where needed.'],
   periods:[
    {time:'08:00',label:'Starting up',heading:'The working day begins.',text:'The building and vehicles need energy while solar generation is still low. The EMS allocates the available power. In this example, the battery stays available for later.',svgTitle:'The building and vehicles share available energy at the start of the day.'},
    {time:'13:00',label:'Using solar',heading:'Use the sun. Save the surplus.',text:'Solar energy goes directly to your building and vehicles. When generation exceeds demand, the battery can store the surplus for later.',svgTitle:'Solar energy is used on site; surplus generation can charge the battery.'},
    {time:'18:00',label:'Buffering peaks',heading:'A busy moment, with a buffer.',text:'Solar generation falls while the business is still running. Stored energy can help cover the peak, while the battery has enough charge and available power.',svgTitle:'The battery supplies previously stored energy back to the site.'}
   ],
   note:'Illustrative site and power flows, not measured data or a product configuration. Storage use depends on generation, demand, battery power and state of charge. The grid can supply additional energy whenever needed.'
  },
  architecture: {
   eyebrow:'Measurement & control',title:'Cables carry power. The EMS allocates charging.',
   power:'Electrical power',control:'Measurement / control',data:'Management data',
   scroll:'Swipe horizontally to explore the full diagram.',region:'Diagram of electrical power, local control and platform data; scroll horizontally to explore',
   svgTitle:'Electrical power and local control follow different routes.',
   description:'Electrical power flows from the grid through the meter and distribution board to the building and chargers. The local EMS receives measurements and limits charging power. Data passes through the local network boundary to the platform for visibility and management. This diagram does not show direct cloud control of chargers.',
   local:'ON YOUR SITE',platform:'PLATFORM',meter:'Grid + meter',distribution:'Distribution',ems:'Local EMS',emsSub:'Measure → control',building:'Building',chargers:'Chargers',overview:'Visibility & management',boundary:'Network boundary',measurement:'Measurements',budget:'Charging budget',
   platformLines:['Sessions and site data','make usage visible.','Control remains local.'],
   steps:[
    ['The meter measures.','Current measurements reveal the available capacity.'],
    ['The EMS allocates.','Local control adapts the charging budget to site limits.'],
    ['The platform shows.','Sessions and site data support management.']
   ],
   imageAlt:'An illustrative business site combining charging, a building, rooftop solar and battery storage.',
   contextLabel:'One site, three different routes',contextTitle:'What carries power? What gives an instruction?',
   contextText:'The physical installation, local control and platform each have a separate role.',
   layerTitles:['Electrical power','Local control','Management data'],
   layerDescriptions:['Power flows through the electrical installation to the loads.','Measurements are translated into a local charging budget.','Site data passes through the network boundary to the platform.'],
   nodes:[
    [['Grid + meter','Supply and measurement'],['Distribution','Electrical installation'],['Building + chargers','On-site consumption']],
    [['Measurements','Current site conditions'],['Local EMS','Calculates charging budget'],['Charging budget','Chargers adapt their power']],
    [['Site data','Sessions and usage'],['Network boundary','Separated communication'],['Visibility & management','Platform overview']]
   ],
   note:'Illustrative site with a functional overview, not a wiring or network diagram. Only the discussed routes are shown; solar and storage are not detailed. The platform route shows management data, not direct cloud control of chargers. Protocols, authorisation and fault behaviour vary by installation.'
  }
 }
};
