import liff from '@line/liff'
import { LiffCore } from '@line/liff/dist/lib/liff'

import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $liff: LiffCore
  }
}

Vue.prototype.$liff = liff
