import * as tslib from "tslib";
import React from "react";
import Svg1ErradicacaoDaPobreza from "./components/1ErradicacaoDaPobreza";
import Svg2FomeZero from "./components/2FomeZeroEAgriculturaSustentavel";
import Svg3SaudeEBemEstar from "./components/3SaudeEBemEstar";
import Svg4EducacaoDeQualidade from "./components/4EducacaoDeQualidade";
import Svg5IgualdadeDeGenero from "./components/5IgualdadeDeGenero";
import Svg6AguaLimpaESaneamento from "./components/6AguaPotavelESaneamento";
import Svg7EnergiaLimpaEAccessivel from "./components/7EnergiaLimpaEAcessivel";
import Svg8TrabalhoDecenteEConomia from "./components/8TrabalhoDecenteECrescimentoEconomico";
import Svg9IndustriaInovacaoEInfraestrutura from "./components/9IndustriaInovacaoEInfraestrutura";
import Svg10ReducaoDasDesigualdades from "./components/10ReducaoDasDesigualdades";
import Svg11CidadesESComunidadesSustentaveis from "./components/11CidadesEComunidadesSustentaveis";
import Svg12ConsumoEProducaoResponsaveis from "./components/12ConsumoEProducaoResponsaveis";
import Svg13AcaoContraMudancaGlobalClima from "./components/13AcaoContraAMudancaGlobalDoClima";
import Svg14VidaNaAgua from "./components/14VidaNaAgua";
import Svg15VidaTerrestre from "./components/15VidaTerrestre";
import Svg16PazJusticaInstituicoesEficazes from "./components/16PazJusticaEInstituicoesEficazes";
import Svg17ParceriasEMeiosDeImplementacao from "./components/17ParceriasEMeiosDeImplementacao";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  showTitle?: boolean;
}

export const OdsIcon1: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg1ErradicacaoDaPobreza, props);
};

export const OdsIcon2: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg2FomeZero, props);
};

export const OdsIcon3: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg3SaudeEBemEstar, props);
};

export const OdsIcon4: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg4EducacaoDeQualidade, props);
};

export const OdsIcon5: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg5IgualdadeDeGenero, props);
};

export const OdsIcon6: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg6AguaLimpaESaneamento, props);
};

export const OdsIcon7: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg7EnergiaLimpaEAccessivel, props);
};

export const OdsIcon8: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg8TrabalhoDecenteEConomia, props);
};

export const OdsIcon9: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg9IndustriaInovacaoEInfraestrutura, props);
};

export const OdsIcon10: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg10ReducaoDasDesigualdades, props);
};

export const OdsIcon11: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg11CidadesESComunidadesSustentaveis, props);
};

export const OdsIcon12: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg12ConsumoEProducaoResponsaveis, props);
};

export const OdsIcon13: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg13AcaoContraMudancaGlobalClima, props);
};

export const OdsIcon14: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg14VidaNaAgua, props);
};

export const OdsIcon15: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg15VidaTerrestre, props);
};

export const OdsIcon16: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg16PazJusticaInstituicoesEficazes, props);
};

export const OdsIcon17: React.FC<SvgProps> = (props) => {
  return React.createElement(Svg17ParceriasEMeiosDeImplementacao, props);
};
