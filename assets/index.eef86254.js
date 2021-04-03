import {
  S as e,
  T as t,
  F as n,
  a as o,
  M as a,
  b as i,
  c as s,
  C as d,
  d as r,
  P as c,
  e as w,
  H as l,
  O as h,
  W as m,
  f as p,
} from './vendor.777527dd.js'
!(function (e = '.', t = '__import__') {
  try {
    self[t] = new Function('u', 'return import(u)')
  } catch (n) {
    const o = new URL(e, location),
      a = e => {
        URL.revokeObjectURL(e.src), e.remove()
      }
    ;(self[t] = e =>
      new Promise((n, i) => {
        const s = new URL(e, o)
        if (self[t].moduleMap[s]) return n(self[t].moduleMap[s])
        const d = new Blob([`import * as m from '${s}';`, `${t}.moduleMap['${s}']=m;`], {
            type: 'text/javascript',
          }),
          r = Object.assign(document.createElement('script'), {
            type: 'module',
            src: URL.createObjectURL(d),
            onerror() {
              i(new Error(`Failed to import: ${e}`)), a(r)
            },
            onload() {
              n(self[t].moduleMap[s]), a(r)
            },
          })
        document.head.appendChild(r)
      })),
      (self[t].moduleMap = {})
  }
})('/assets/')
const u = document.querySelector('canvas.canvas'),
  M = new e(),
  f = new t()
new n().load('./fonts/FantasqueSansMono.json', e => {
  const t = new o('@belfubu', {
    font: e,
    size: 0.5,
    height: 0.2,
    curveSegments: 8,
    bevelEnabled: !0,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 4,
  })
  t.center()
  const n = new a(),
    c = new i(t, n)
  M.add(c)
  const w = new s(0.3, 0.2, 20, 45),
    l = new d(0.4, 0.8, 18),
    h = new r(0.2, 0.2, 0.8, 16, 8)
  for (let o = 0; o < 300; o++) {
    let e
    e = o % 3 == 0 ? w : o % 2 == 0 ? l : h
    const t = new i(e, n)
    t.position.set(
      10 * (Math.random() - 0.5),
      10 * (Math.random() - 0.5),
      10 * (Math.random() - 0.5),
    ),
      (t.rotation.x = Math.random() * Math.PI),
      (t.rotation.y = Math.random() * Math.PI)
    const a = Math.random() - 0.5
    t.scale.set(a, a, a), M.add(t)
  }
})
const g = { width: window.innerWidth, height: window.innerHeight }
window.addEventListener('resize', () => {
  ;(g.width = window.innerWidth),
    (g.height = window.innerHeight),
    (v.aspect = g.width / g.height),
    v.updateProjectionMatrix(),
    S.setSize(g.width, g.height),
    S.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
const v = new c(75, g.width / g.height, 0.1, 100)
;(v.position.x = 0.1), (v.position.y = 0.1), (v.position.z = 2), M.add(v)
const b = new w(16777215, 0.5),
  R = new w(65535, 0.5)
b.position.set(2, 3, 10), R.position.set(5, 1, 1), M.add(b, R)
const P = new l(5112063, 3216e3, 0.5)
M.add(P)
const x = new h(v, u)
x.enableDamping = !0
const S = new m({ canvas: u })
S.setClearColor(1118481, 0.5),
  S.setSize(g.width, g.height),
  S.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const j = new p(),
  L = () => {
    j.getElapsedTime(), x.update(), S.render(M, v), window.requestAnimationFrame(L)
  }
L()
