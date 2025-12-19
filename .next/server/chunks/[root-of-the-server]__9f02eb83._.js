module.exports=[70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},64784,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),o=e.i(59756),n=e.i(61916),s=e.i(14444),i=e.i(37092),l=e.i(69741),d=e.i(16795),p=e.i(87718),c=e.i(95169),u=e.i(47587),x=e.i(66012),m=e.i(70101),h=e.i(26937),f=e.i(10372),g=e.i(93695);e.i(52474);var v=e.i(220),b=e.i(89171);let y=e.i(29508).default.createTransport({host:"smtp.zoho.com",port:465,secure:!0,auth:{user:process.env.EMAIL_USER||"support@mavenrnvn.com",pass:process.env.EMAIL_PASSWORD},tls:{rejectUnauthorized:!1}});async function w(e){try{let{customer:t,items:r,total:a,orderNumber:o}=await e.json();if(!t||!r?.length||void 0===a||!o)return b.NextResponse.json({error:"Invalid request payload"},{status:400});let n={from:'"Maven Orders" <support@mavenrnvn.com>',to:t.email,subject:`Your Order #${o} Confirmation`,html:(({orderNumber:e,customerName:t,items:r,total:a,paymentMethod:o})=>{let n={"bank-transfer":"Bank Transfer","btc-wallet":"BTC Wallet","gift-card":"Gift Card"}[o]||o;return`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; background: #f9fafb; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
        .header { background: #111827; color: #ffffff; padding: 24px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 24px; }
        .thank-you { font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; }
        .order-number { background-color: #f0fdf4; color: #065f46; padding: 4px 8px; border-radius: 4px; font-weight: 500; font-size: 14px; display: inline-block; margin-bottom: 16px; }
        .section { margin-bottom: 24px; }
        .section-title { font-size: 18px; font-weight: 600; color: #111827; margin-bottom: 12px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; }
        .order-items { width: 100%; border-collapse: collapse; margin-top: 8px; }
        .order-items th { text-align: left; background-color: #f9fafb; padding: 12px; font-size: 14px; color: #4b5563; border-bottom: 1px solid #e5e7eb; }
        .order-items td { padding: 16px 12px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .item-name { font-weight: 500; color: #111827; }
        .item-quantity, .item-price { color: #4b5563; }
        .order-totals { margin-top: 24px; text-align: right; }
        .total-row { display: flex; justify-content: space-between; max-width: 200px; margin-left: auto; padding: 8px 0; }
        .total-label { color: #4b5563; }
        .total-value { font-weight: 600; color: #111827; }
        .grand-total { font-size: 18px; border-top: 2px solid #e5e7eb; margin-top: 8px; padding-top: 12px; }
        .footer { background-color: #f9fafb; padding: 24px; text-align: center; color: #6b7280; font-size: 14px; line-height: 1.6; }
        .payment-method { display: inline-block; background-color: #eff6ff; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-size: 14px; margin-top: 8px; }
        .next-steps { background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 12px 16px; margin: 16px 0; border-radius: 0 4px 4px 0; }
        .next-steps-title { font-weight: 600; color: #1e40af; margin-bottom: 8px; }
        .next-steps-list { margin: 0; padding-left: 20px; }
        .customer-details { margin-bottom: 24px; }
        .customer-details p { margin: 4px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank you for your order!</h1>
        </div>

        <div class="content">
          <p class="thank-you">Hi ${t},</p>
          <p>We've received your order and it's being processed. You'll receive another email once your items are on their way.</p>
          
          <div class="order-number">Order #${e}</div>
          
          <div class="customer-details">
            <div class="section-title">Order Details</div>
            <p><strong>Order Number:</strong> ${e}</p>
            <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Payment Method:</strong> ${n}</p>
          </div>
          
          <div class="section">
            <div class="section-title">Order Summary</div>
            <table class="order-items">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${r.map(e=>`
                  <tr>
                    <td class="item-name">${e.name}</td>
                    <td class="item-quantity">${e.quantity}</td>
                    <td class="item-price">$${e.price.toFixed(2)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <div class="order-totals">
            <div class="total-row">
              <span class="total-label">Subtotal:</span>
              <span class="total-value">$${a.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span class="total-label">Shipping:</span>
              <span class="total-value">$0.00</span>
            </div>
            <div class="total-row grand-total">
              <span class="total-label">Total:</span>
              <span class="total-value">$${a.toFixed(2)}</span>
            </div>
            <div class="payment-method">
              ${n} Payment
            </div>
          </div>

          <div class="next-steps">
            <div class="next-steps-title">What's Next?</div>
            <ul class="next-steps-list">
              <li>We'll process your order within 24 hours</li>
              <li>You'll receive a shipping confirmation with tracking information</li>
              <li>For any questions, reply to this email or contact our support</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>Thank you for shopping with us!</p>
          <p>If you have any questions about your order, please don't hesitate to contact our customer service team.</p>
          <p>\xa9 ${new Date().getFullYear()} Maven. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `})({orderNumber:o,customerName:t.name,items:r,total:a,paymentMethod:t.paymentMethod||"bank-transfer"})},s=await y.sendMail(n);if(!s.accepted||0===s.accepted.length)return console.error("Email not accepted by SMTP server:",s),b.NextResponse.json({error:"Failed to send confirmation email",details:s},{status:500});return b.NextResponse.json({success:!0,message:"Confirmation email sent successfully",messageId:s.messageId})}catch(e){return console.error("Send confirmation error:",e),b.NextResponse.json({error:"Failed to process confirmation email",details:e.message},{status:500})}}e.s(["POST",()=>w],9154);var R=e.i(9154);let E=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/send-confirmation/route",pathname:"/api/send-confirmation",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/send-confirmation/route.ts",nextConfigOutput:"",userland:R}),{workAsyncStorage:C,workUnitAsyncStorage:k,serverHooks:A}=E;function T(){return(0,a.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:k})}async function O(e,t,a){E.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/send-confirmation/route";b=b.replace(/\/index$/,"")||"/";let y=await E.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,params:R,nextConfig:C,parsedUrl:k,isDraftMode:A,prerenderManifest:T,routerServerContext:O,isOnDemandRevalidate:P,revalidateOnlyGenerated:N,resolvedPathname:S,clientReferenceManifest:q,serverActionsManifest:$}=y,j=(0,l.normalizeAppPath)(b),M=!!(T.dynamicRoutes[j]||T.routes[S]),I=async()=>((null==O?void 0:O.render404)?await O.render404(e,t,k,!1):t.end("This page could not be found"),null);if(M&&!A){let e=!!T.routes[S],t=T.dynamicRoutes[j];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await I();throw new g.NoFallbackError}}let _=null;!M||E.isDev||A||(_="/index"===(_=S)?"/":_);let D=!0===E.isDev||!M,H=M&&!D;$&&q&&(0,s.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:q,serverActionsManifest:$,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:$})});let U=e.method||"GET",F=(0,n.getTracer)(),z=F.getActiveScopeSpan(),K={params:R,prerenderManifest:T,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,o.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>E.onRequestError(e,t,a,O)},sharedContext:{buildId:w}},L=new d.NodeNextRequest(e),B=new d.NodeNextResponse(t),W=p.NextRequestAdapter.fromNodeNextRequest(L,(0,p.signalFromNodeResponse)(t));try{let s=async e=>E.handle(W,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${U} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${b}`)}),i=!!(0,o.getRequestMeta)(e,"minimalMode"),l=async o=>{var n,l;let d=async({previousCacheEntry:r})=>{try{if(!i&&P&&N&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await s(o);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!M)return await (0,x.sendResponse)(L,B,n,K.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[f.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=f.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,a=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=f.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await E.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:P})},O),t}},p=await E.handleResponse({req:e,nextConfig:C,cacheKey:_,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:P,revalidateOnlyGenerated:N,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:i});if(!M)return null;if((null==p||null==(n=p.value)?void 0:n.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",P?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,m.fromNodeOutgoingHttpHeaders)(p.value.headers);return i&&M||c.delete(f.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,h.getCacheControlHeader)(p.cacheControl)),await (0,x.sendResponse)(L,B,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};z?await l(z):await F.withPropagatedContext(e.headers,()=>F.trace(c.BaseServerSpan.handleRequest,{spanName:`${U} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof g.NoFallbackError||await E.onRequestError(e,t,{routerKind:"App Router",routePath:j,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:P})}),M)throw t;return await (0,x.sendResponse)(L,B,new Response(null,{status:500})),null}}e.s(["handler",()=>O,"patchFetch",()=>T,"routeModule",()=>E,"serverHooks",()=>A,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>k],64784)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__9f02eb83._.js.map