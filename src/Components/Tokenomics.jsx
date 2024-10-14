import "./Tokenomics.css";
import tokenomic_graph from "../Assets/Images/Tokenomic_graph.svg";
import useIntersectionObserver from "./InterSection_observer";

export default function Tokenomics(){
    const ref1 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref2 = useIntersectionObserver({
        threshold: 0.1,
      });
    return(<div className="Tokenomic_section_container" id="Tokenomics_Section">
        <h1>Tokenomics</h1>
        <div className="Tokenomic_body">
            <div ref={ref1} className="graph_container grid justify-items-center items-center transform_side"><img loading="lazy" src={tokenomic_graph} alt="" /></div>
            
            <div ref={ref2} className="tokenomic_info_container transform_other_side">
                <div><p>Token Name</p> <p>Ameio</p></div>
                <div><p>Symbol</p> <p>AMEO</p></div>
                <div><p>Network</p> <p>Solona</p></div>
                <div><p>Presale Allocation</p> <p>3 Billion</p></div>
                <div><p>Locked</p> <p>3 Billion/m</p></div>
                <div><p>Total</p> <p>10 Billion</p></div>
            </div>
        </div>

    </div>)
}