import React, {useId, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {strings, type Locale} from './strings';

export type EnergyVisualProps = {locale?: Locale | string};

function useVisual(locale?: string) {
 const {i18n} = useDocusaurusContext();
 const id = `energy-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
 const scenes = useBaseUrl('/images/scenes/');
 return {id, scenes, t: strings[(locale ?? i18n.currentLocale) === 'nl' ? 'nl' : 'en']};
}

function FigureHeader({eyebrow, model}: {eyebrow:string; model:string}) {
 return <div className={styles.header}><span className={styles.eyebrow}><i aria-hidden="true"/>{eyebrow}</span><span className={styles.model}>{model}</span></div>;
}

/** A configured site power limit, not physical connection or contracted capacity. */
export function CapacityExplorer({locale}: EnergyVisualProps = {}) {
 const {id,t} = useVisual(locale);
 const c = t.capacity;
 const [building,setBuilding] = useState(45);
 const charging = Math.min(70,100-building);
 const total = building+charging;
 const spare = 100-total;
 return <figure className={styles.visual} aria-labelledby={`${id}-caption`}>
  <FigureHeader eyebrow={c.eyebrow} model={t.model}/>
  <div className={styles.capacityLayout}>
   <div className={styles.capacityControl}>
    <label htmlFor={`${id}-demand`}>{c.label}</label>
    <div className={styles.capacityValue}><output htmlFor={`${id}-demand`}>{building}</output><span>kW</span></div>
    <input id={`${id}-demand`} type="range" min={10} max={90} step={1} value={building} onChange={event=>setBuilding(Number(event.target.value))} aria-valuetext={c.value(building,charging)} aria-describedby={`${id}-help`}/>
    <div className={styles.rangeEnds}><span>{c.quiet}</span><span>{c.busy}</span></div>
    <p id={`${id}-help`} className={styles.controlHelp}>{c.help}</p>
    <div className={styles.equation} aria-hidden="true"><span>100<small>{c.connection}</small></span><b>−</b><span>{building}<small>{c.building}</small></span><b>=</b><span>{100-building}<small>{c.available}</small></span></div>
   </div>
   <div className={styles.capacityChart}>
    <div className={styles.chartHeading}>{c.chartTitle}</div>
    <div className={styles.capacityScale} aria-hidden="true"><span>0</span><span>100 kW</span></div>
    <div className={styles.capacityTrack} role="img" aria-label={c.description(building,charging,total)}>
     <span className={styles.buildingSegment} style={{width:`${building}%`}} aria-hidden="true">{building}</span>
     <span className={styles.chargingSegment} style={{width:`${charging}%`}} aria-hidden="true">{charging}</span>
     <span className={styles.spareSegment} style={{width:`${spare}%`}} aria-hidden="true"/>
    </div>
    <dl className={styles.capacityMetrics}>
     <div><dt><i className={styles.buildingDot} aria-hidden="true"/>{c.buildingLabel}</dt><dd><strong>{building}</strong> <span>kW</span><small>{c.now}</small></dd></div>
     <div><dt><i className={styles.chargingDot} aria-hidden="true"/>{c.charging}</dt><dd><strong>{charging}</strong> <span>kW</span><small>{c.request(charging)}</small></dd></div>
    </dl>
    <div className={styles.chartTotal}><span>{c.total}</span><strong>{total} kW</strong></div>
    <div className={styles.chartSpare}><span>{c.spare}</span><span>{spare} kW</span></div>
   </div>
  </div>
  <div className={styles.result} role="status" aria-live="polite" aria-atomic="true"><span aria-hidden="true"/><p>{c.result(building,charging,70-charging,spare)}</p></div>
  <figcaption id={`${id}-caption`} className={styles.caption}><strong>{c.title}</strong><p>{c.note}</p></figcaption>
 </figure>;
}

export function DayFlow({locale}: EnergyVisualProps = {}) {
 const {id,t,scenes} = useVisual(locale);
 const c=t.day;
 const [period,setPeriod]=useState(1);
 const [paused,setPaused]=useState(false);
 const tabs=useRef<Array<HTMLButtonElement|null>>([]);
 const state=c.periods[period];
 const sources=period===0?[c.grid]:period===1?[c.solar]:[c.storage,c.grid];
 const destinations=period===1?[c.site,c.storage]:[c.site];
 const imageNames=['morning','midday','evening'];
 function moveTab(event:React.KeyboardEvent<HTMLButtonElement>,index:number) {
  let next=index;
  if(event.key==='ArrowRight') next=(index+1)%3;
  else if(event.key==='ArrowLeft') next=(index+2)%3;
  else if(event.key==='Home') next=0;
  else if(event.key==='End') next=2;
  else return;
  event.preventDefault();setPeriod(next);tabs.current[next]?.focus();
 }
 return <figure className={`${styles.visual} ${styles.dayVisual}`} data-period={period} data-paused={paused} aria-labelledby={`${id}-caption`}>
  <FigureHeader eyebrow={c.eyebrow} model={t.model}/>
  <div className={styles.dayTabs} role="tablist" aria-label={c.tabsLabel}>
   {c.periods.map((item,index)=><button key={item.time} type="button" role="tab" id={`${id}-tab-${index}`} ref={element=>{tabs.current[index]=element}} aria-controls={`${id}-panel`} aria-selected={period===index} tabIndex={period===index?0:-1} onClick={()=>setPeriod(index)} onKeyDown={event=>moveTab(event,index)}><span>{item.time}</span>{item.label}</button>)}
  </div>
  <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${period}`} tabIndex={0}>
   <div className={styles.campusFrame}>
    {imageNames.map((name,index)=><img key={name} className={styles.campusImage} data-active={period===index} src={`${scenes}campus-${name}-960.webp`} srcSet={`${scenes}campus-${name}-640.webp 640w, ${scenes}campus-${name}-960.webp 960w, ${scenes}campus-${name}-1536.webp 1536w`} sizes="(max-width: 700px) 100vw, 800px" alt={period===index?`${c.imageAlt} ${c.periods[index].time}.`:''} aria-hidden={period!==index} loading="lazy" decoding="async" width={1536} height={1024}/>)}
    <div className={styles.sceneClock} aria-hidden="true"><span>{state.time}</span><i/>{state.label}</div>
   </div>
   <p className={styles.sceneCaption}>{c.sceneCaption}</p>
   <div className={styles.powerRoute} aria-label={c.routeLabel}>
    <div className={styles.routeLabel}>{c.routeLabel}</div>
    <div className={styles.routeFlow}>
     <div className={styles.routeGroup}>{sources.map(label=><span key={label}>{label}</span>)}</div>
     <div className={styles.routeArrow} aria-hidden="true"><i/><span>→</span></div>
     <div className={`${styles.routeGroup} ${styles.routeDestinations}`}>{destinations.map(label=><span key={label}>{label}</span>)}</div>
    </div>
    <p className={styles.routeNote}>{c.routeNotes[period]}</p>
   </div>
   <div className={styles.dayExplanation} aria-live="polite" aria-atomic="true"><span className={styles.dayTime}>{state.time}</span><div><h4>{state.heading}</h4><p>{state.text}</p></div></div>
  </div>
  <div className={styles.motionRow}><button type="button" className={styles.motionToggle} aria-pressed={paused} onClick={()=>setPaused(!paused)}><span aria-hidden="true">{paused?'▷':'Ⅱ'}</span>{paused?t.play:t.pause}</button></div>
  <figcaption id={`${id}-caption`} className={styles.caption}><strong>{c.title}</strong><p>{c.note}</p></figcaption>
 </figure>;
}

export function ControlArchitecture({locale}: EnergyVisualProps = {}) {
 const {id,t,scenes}=useVisual(locale);
 const c=t.architecture;
 return <figure className={styles.visual} aria-labelledby={`${id}-caption`}>
  <FigureHeader eyebrow={c.eyebrow} model={t.model}/>
  <div className={styles.architectureContext}>
   <div className={styles.contextImage}><img src={`${scenes}campus-midday-960.webp`} srcSet={`${scenes}campus-midday-640.webp 640w, ${scenes}campus-midday-960.webp 960w`} sizes="(max-width: 700px) 100vw, 380px" width={960} height={640} alt={c.imageAlt} loading="lazy" decoding="async"/></div>
   <div className={styles.contextCopy}><span>{c.contextLabel}</span><h4>{c.contextTitle}</h4><p>{c.contextText}</p></div>
  </div>
  <div className={styles.architectureLayers}>
   {c.layerTitles.map((title,layer)=><section className={styles.architectureLayer} data-layer={layer} aria-labelledby={`${id}-layer-${layer}`} key={title}>
    <div className={styles.layerHeading}><span aria-hidden="true">0{layer+1}</span><h4 id={`${id}-layer-${layer}`}>{title}</h4><p>{c.layerDescriptions[layer]}</p></div>
    <div className={styles.layerFlow}>
     {c.nodes[layer].map(([label,note],index)=><React.Fragment key={label}>
      {index>0 && <span className={styles.layerArrow} aria-hidden="true">→</span>}
      <div className={`${styles.layerNode}${layer===1&&index===1?` ${styles.emsNode}`:''}`}><strong>{label}</strong><small>{note}</small></div>
     </React.Fragment>)}
    </div>
   </section>)}
  </div>
  <figcaption id={`${id}-caption`} className={styles.caption}><strong>{c.title}</strong><p>{c.note}</p></figcaption>
 </figure>;
}
