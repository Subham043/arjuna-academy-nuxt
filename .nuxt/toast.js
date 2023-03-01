import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"\u002FUsers\u002Fsubham\u002FDocuments\u002Farjuna_academy\u002Ffrontend\u002Fnode_modules\u002Fvue-toastification\u002Fdist\u002Findex.css","timeout":8000,"position":"bottom-center"});
  inject('toast', toast);
}
