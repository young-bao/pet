import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex)

const state = {
  text: "Praesent quis orci eget diam viverra consequat. " +
      "Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. " +
      "Donec venenatis posuere velit a convallis neque ullamcorper quis. " +
      "Integer posuere ipsum eu risus sollicitudin nec varius erat luctus. " +
      "Fusce fringilla erat ac urna pe llentesque congue. Nunc fringilla, diam sit amet adipi scing bibendum turpis velit feugiat urna, et pharetra neque nisi ac nunc." +
      " Vivamus est quam dapibus ullamco rper imperdiet nec, euismod ut arcu. Nulla facilisi. " +
      "Etiam mauris lorem pulvinar vel con sequat ut pretium ac erat. Morbi facilisis elit eu nisl blandit ac blandit enim faucibus. " +
      "Praesent quis orci eget diam viverra consequat. Fusce sagittis.",
  introduce: "Nunc fringilla, diam sit amet adipi scing bibendum turpis velit feugiat urna, et pharetra neque nisi ac nunc. " +
      "Viv amus est quam dapibus ullamco rper imperdiet nec euismod ut arcu. Nulla facilisi. Etiam mauris.",
  weCommend: [{
    imgSr: require("@/images/page3_img1.jpg"),
    linkText: "Nunc fringilla diam sit amet adipi scing bibendum turpis velit feugiat urna etlort pharetra neque nisi ac nunc.",
    commend: "Vivamus est quam dapibus ullamcolot rperolty hoki. Hibh ullamcorper accufogy msan sem lectus ut sapien. Donecjoilih venenatis posuere eli a convallis." +
        "Praesent quis orci eget diam viverra consequat. " +
        "Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. " +
        "Donec venenatis posuere velit aty convallis neque ullamcorper quis. " +
        "Integer posuere ipsum eu risus sollicitudin nec varius eratylo luctus. " +
        "Fusce fringilla erat ac urna pe llentesque congue. " +
        "Nunc fringilla diam sit amet adipi scing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc." +
        " Vivamus est quam dapibuslok. "
  },{
    imgSr: require("@/images/page3_img2.jpg"),
    linkText: "Plunc fringilla diam sit amet adipi scing bibendum turpis velit feugiat urna etlort pharetra neque nisi ac nuny.",
    commend: "Wivamus est quam dapibus ullamcolot rperolty hoki. Hibh ullamcorper accufogy msan sem lectus ut sapien. Monecjoilih venenatis posuere eli a convally.Traesent quis orci eget diam viverra consequat. Fusce sagittis quam in pulvinar sollicitudin velit velit cursus nibh ullamcorper accumsan sem lectus ut sapien. Donec venenatis posuere velit aty convallis neque ullamcorper quis. Integer posuere ipsum eu risus sollicitudin nec varius eratylo luctus. Kusce fringilla erat ac urna pe llentesque congue. Ounc fringilla diam sit amet adipi scing bibendum turpis velit feugiat urna et pharetra neque nisi ac nunc. Vivamus est quam dapibuslok.  "
  }],
  MainServe: [{
    linkSer: "Tuis posuere consectetur pellente",
    aboutText: "Sed nisi turpis pellentesque at ultriceso in dapibus in magna. Kunc easi diamyu risulacerat ut scelerisque et suscip."
  },{
    linkSer: "Juuis posuere consectetur pellente",
    aboutText: "Ted nisi turpis pellentesque at ultricesyt in dapibus io magna. Runc easi diamyu risulacerat ut scelerisque et suscipy."
  },{
    linkSer: "Dpuis posuere honsectetur pellentio",
    aboutText: "Yoed nisi turpis, pellentesque at ultrkoty ices in dapibus in magna. Unc easigoli diam risujo placerat ut scelerisko."
  },{
    linkSer: "Kouis losuere honsectetur pellentit",
    aboutText: "Gyoed nisi turpis pellentesque at kolop ultrkoty ices in dapibus in magna. Cea si goli diam risujo placerat ut tyulortyuil."
  },{
    linkSer: "Opuis posuere monsectetur pellentlo",
    aboutText: "Loed nisi turpis pellentesqupo at ult ylo rkoty ices in dapibus in magna. Uncylo easigoli diam risujo placerat utwetyko."
  },{
    linkSer: "Hipuis posuere honsectetur pellen",
    aboutText: "Huoed nisi turpis pellentesque at iotyk ultrkoty ices in dapibus in magna. Unc easigoli diam risujo placerat ut wertytu."
  }]

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
