<template>
  <ListItem v-for="item in sneakers" :item="item"/>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  components:{
    ListItem
  },
  data() {
    return {
      sneakers: [
        {
          id: 1,
          name: 'Nike Dunk Low',
          price: '899',
          type: 'low',
          url_img: [
            "https://lh3.google.com/u/0/d/1LnpFDEYFi9VR49Wr164TkgcLDfYi-scB=w1098-h961-iv1",
            "https://lh3.google.com/u/0/d/1Mz_zBMmz6phAQlSU4nu0uYt955wGXct_=w2000-h10000-iv1",
            "https://lh3.google.com/u/0/d/1YxQJfd2bR2fuYfI6Lf7iOUwYG8jZlHfh=w743-h961-iv1",
            "https://lh3.google.com/u/0/d/14u1PPeT6Nb8kpR8WnPGvu72iEqnRYige=w743-h961-iv1",
            "https://lh3.google.com/u/0/d/1nfunroJk4qqHxapLJd1oPCEGDJdUJlws=w743-h961-iv1",
          ],
        },
        {
          id: 2,
          name: 'Nike Dunk Low',
          price: '1099',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1ftrnxPvSSEbWetHiEtHnDrOSbX-IseF2=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/1VsP07YZentwX5HbL-g4rRpn_7SqRIyZR=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/1brlf5aXWmVPJW2JlaI0mexM44zX78s7h=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/14ON62lkdDWCI3kcSnzYuqCNKM4j6Otpd=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/11y2EIFmanUErXOmqdylmUOFU0rZQXPdz=w743-h961-iv1",
          ],
        },
        {
          id: 3,
          name: 'Nike Dunk Low',
          price: '1459',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1BN0TaPWkIcQ0QHxm2dvzzvcnmuQOburb=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/16OsceXJf1A2m-pRJYz5tPmz_0drjE24v=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/1o6Tuz5GdFC9zKTCSbbPRe87qlsPvgqhL=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/1JG3ibd12vZ-2Vb17RiP-jYxc6TWo94Xi=w743-h961-iv1",
              "https://lh3.google.com/u/0/d/1CeStjVhvXC0Xkr2dn4tJydQoA37H84iX=w890-h961-iv1",
          ],
        },
        {
          id: 4,
          name: 'Nike Dunk Low SE "dusty olive"',
          price: '1789',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1ykz0nsBGjLt_l8uShWgATS7E1UFCL3fg=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1VDy8e4-u9oHF66jwPEo6esi3Dxcu_mAe=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1F4_bO7wiLqYONeJ39lSmYVulxTuV2NWu=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1KjdglAeEBOtEb-H81GIeQCNohlwWArlu=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1z14aTJH_2DtnfHjeSMIvfaQYbwfkcvPr=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1TAiW8MvmGDKfJK8JD70bIpHA7qldsL1-=w1034-h961-iv1",
          ],
        },
        {
          id: 5,
          name: 'Nike Air Dunk Jumbo Remastered "Olive"',
          price: '709',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1zZZfSlers3DhFKDVKMhKSj0VsA3_CRsP=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1pziMmIJPV5-kyBBlthl-GQimBSrCwrDS=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1p0Bij1NhgCNIsxaChltQOPClwJ3IF6NF=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1xBuZ6vZGD62br0CI7TSsu8pgws3wnoFB=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1gUJNPg2KJjhfjWvvGTVbZMEtymbIImgs=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1r5YLFgM8-AlLbbxLtCdqc0_xPt0hJSZP=w1034-h961-iv1",
          ],
        },
        {
          id: 6,
          name: 'Nike Dunk Low Retro NN "Toasty"',
          price: '579',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/14M1CHIR9cQ0u2yRNi2d6yPZoswJX9SUu=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1hL7U7-Q7ivCFT19Rac6X3cp9B9vahgad=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1lL7m0was24IWHy-tAZl4L7Iu8u0qwog_=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1mmNDcA5sz_zfJ3mANrKe2gLk1OikhGPD=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/11GsJTerHkxNBAnAl5gljOvbdmTev2XoC=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1EXuM3LnndIhYuXzHpLjX16hN7-s4soMX=w1034-h961-iv1",
          ],
        },
        {
          id: 7,
          name: 'Nike Dunk Low',
          price: '1549',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1o0I8Mya87KyZyZo3s3WHfRErd0MQ90W-=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1OSGF1-efP_8hUJ22E8emgA2bXEoN0CT7=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1jlkgyd2tGtwJ7NAHP4CI-cOiCz29pNWp=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1cmsrlbB7I97rFa1yyblemF9CBiWmY7tn=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/17J7WNlEd-kx8ffkgEhSTA85q77ucwOB-=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1MzyqX0oVHofGVW_xWyNvX-L_UGe-Mm98=w1034-h961-iv1",
          ],
        },
        {
          id: 8,
          name: 'Nike Air Dunk Jumbo Remastered',
          price: '389',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/12uLhpjvGPbewB-rNkqeFaIVG30rJR4jd=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1mC1PRooSk9cDHHCFhXFuKiCv4DGjuS84=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1G05TPTS8MA4NFercM0QslIrclQPWKYR7=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1psPETueOhmsWyIsMRPhBHiUXoGOlm__s=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/15nz5rU8RtFpT_3xqxGhFYOJ2pIrAZKYW=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1iUCOhR0_EcVTJCgA7WZRPamBFc1etY_l=w1034-h961-iv1",
          ],
        },
        {
          id: 9,
          name: 'Nike Dunk Low',
          price: '1349',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1T4T3H4FgZq_gDMWCPFfRDgpmWUyhk6a9=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1a2jXpJSH6YqFnC31XKToOOEJyVkktFmH=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1bj4GYEYtlgL4jN9L5TK3VGRuOFDUih0k=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1XJtDqItxKwugp4KI_YY7APIRsmlM0Zjg=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1pcGQyj-sHWFaHOhv5Qh6JriD_cYrN0Q3=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1cvqYmzG_kuugKVVSl43b26ja8iAPdD-S=w1034-h961-iv1",
          ],
        },
        {
          id: 10,
          name: 'Nike Air Force 1 Low \'07 Lx Reveal',
          price: '719',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1EcGFeMEwLtAvYssqs5uDDYy9C4kzJkru=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1QdFq9odYUJGYvGpsd1Wt1hhgEnyTGOg2=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1o445vqEmuQKYTCm9CV9RHE-3WKDfGS8Z=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1w8ix5pRO6fytjNXB-aekyjr2Q0Ujv4S5=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1SrXhQVpMEuCULIlLUtvXHeKY9ZXwN5N1=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1rAn0H_OIWqlDscllXURfQBIU5Z4a2HAe=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1fqrhoZ8XFD2iQxQHh4xfSemh9yqkuRVJ=w1034-h961-iv1",
          ],
        },
        {
          id: 11,
          name: 'Jarritos x Nike Dunk SB Low "Phantom and Malachite"',
          price: '1879',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/105fsY0trwUfFcyw5iQIC00vUosbJuYyV=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1cqbFp5Azhy8UFT6neHxdmHJQ3m-e2SOv=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1VG7MqpCsR9A7Yl-3kqu2GHGGy78MjdQm=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/13sd_1w3r7q34AZcrj2f9gV1afoch7gt4=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1KhQv91GAFemOgQH4Yd5imQabP4VTiY9o=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1iMxuINMwe6JqDQ1N3jGeiiY_VNdhq56a=w1034-h961-iv1",
          ],
        },
        {
          id: 12,
          name: 'CIVILIST BERLIN x Nike Dunk SB Low',
          price: '2489',
          type: 'low',
          url_img: [
              "https://lh3.google.com/u/0/d/1UQerelKm94hWiC5ZkKNcc5g7toHGHs90=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1TVlYWA8HfFvomFLpoN_aBw3B5SGyA-Y8=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1HdbM0rk9ib9wRL3JNIDaRmjkJ4dNlb72=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1jCm2IocjAepA7RASxKG7eBhlXmhIRq9r=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1JVI6Fz-cDaRjetNYYu27bTMB82MXQovO=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1VRxPr0qaVXNkkAx-K9N55XcQqwm5Qxc2=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/10fyf_f-QFQBBPaa3RIuZk3Ap2fDFHZec=w1034-h961-iv1",
          ],
        },
        {
          id: 13,
          name: 'Nike Dunk Mid "Mineral Teal and Moss"',
          price: '459',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/16zs3D-dq5LBEmQc6SXH_xT1EYfZrAWkL=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/12tDa18YWgrnduwDMapVHnsLw5C-YB8tQ=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1ODEa-tPtaCi4Gw6xvY0ibFKqYyPyi2WY=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1Y4pQ7_PMEefLBxR1RZ6qHrEhYpV5dMIX=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1FQBjiji_l5pEsg3UH3zwcsrU-clU86Td=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1aMcn9z6YaBhc2Y5p4OwVYMjxY3LkWjll=w1034-h961-iv1",
          ],
        },
        {
          id: 14,
          name: 'Nike Air Force 1 Mid LV8 "Wolf Grey"',
          price: '4599',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/14mCIgqVIAT__bVHFXZcyN6SmlCac7GPd=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1K9SRQ4B5On3Jq48lHie6jJu4Kip06GvO=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1laCA0hwmsPfqiFfzWm83_1Ah5DP65vu5=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/167aBMAADBTGwB8Ssb0timCBFlCX6jOpj=w1034-h961-iv1",
          ],
        },
        {
          id: 15,
          name: 'Nike Dunk SB Mid Mama Bear',
          price: '9859',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/1oIhPVH_7P1-AL6eCxyGuACnotBYsSXul=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1j_AUKUHAI8GQgod7R3dvzTHlrnnwl059=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/17WQ_P8vsIWjj9fw4EWPWLBWU6kI8JpOI=w1034-h961-iv1",
          ],
        },
        {
          id: 16,
          name: 'Nike Air Force 1 Mid "Fresh"',
          price: '588',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/12keky92OLRTqezKS9niF2-_2DGpdUgg9=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/14HyIXZK4D7aC6iGsfTWDbYbmx4WFZwWo=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1JXrBA4bqVmNpXwLiV9B1y2og0uV3v3HF=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1UWjtWNKkLgXJ9Ux9dt6lr3xsKN9ZEJo1=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1vw2HHErciY07fL4y9DkRjUjAmSvF2gwr=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1hFCn-QdOXZW3rJrMuSGC_pSWWQyD1nB2=w1034-h961-iv1",
          ],
        },
        {
          id: 17,
          name: 'Nike Dunk SB Mid',
          price: '5499',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/1sTeavwy8JBxa7gJaUTgSZg8S6CldWpxO=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1kCqZFvDMq-EiSTfmQaeH16lzGZ7wgTgK=w1034-h961-iv1",
          ],
        },
        {
          id: 18,
          name: 'Nike Air Force 1 Mid',
          price: '999',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/1XFF2GHUzxjD87-ePFdxsipXDqjGnenOf=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1pRJSZhrAI4xqKBFxSfJfbHCAKCeZHCuf=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1W2ksIovCYlpxJQnO3QyWeuMbIUVQaHma=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1MMDuLCBIy-pZHx-s4U0_cZf9lvMvg4DV=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1EBaFPzj4lcJC93AKPA37C3jzBtyVvAda=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1mbOUfGmbj6SjxpeBkB8tb6PQirYNTnnH=w2000-h2550-iv1",
          ],
        },
        {
          id: 19,
          name: 'Nike Dunk SB Mid White Widow',
          price: '1529',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/1sOagprRHVKxbxiuK_s8znYZzkJHdQzwe=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1hbJYTKRlBc-PGnroToCBElupUPjna1ZL=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/19uzHTc35COX8FXHSa5mDO_icJVuMeQKy=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1t2v8IprPHoSUr-O1_lYXYjViu-voNm2U=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1Bm6qUXTAoUtDo4oi8og1IHlkFQVAiwRf=w1034-h961-iv1",
          ],
        },
        {
          id: 20,
          name: 'Nike Dunk SB Mid Patagonia',
          price: '3299',
          type: 'high',
          url_img: [
              "https://lh3.google.com/u/0/d/1Nji1AGvO6_bwbpasyQcNaZBdMGB_xHyu=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1JfoNKSpRg9a_WS_k0YKz-qT-RGWjb_Fe=w1034-h961-iv1",
              "https://lh3.google.com/u/0/d/1lFAkN9RvkAnPNArDJ6GA_J_sfr6AqwZx=w1034-h961-iv1",
          ],
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>