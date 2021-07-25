let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
  //いらすとやの画像15枚
"https://1.bp.blogspot.com/-vsrjLB8Wyng/YEGP_R749_I/AAAAAAABdck/-khfythfWqU5wb6X4FzfzeaJVhIztvByACNcBGAsYHQ/s180-c/buranko_boy_sad.png",
"https://1.bp.blogspot.com/-BnPjHnaxR8Q/YEGP_e4vImI/AAAAAAABdco/2i7s2jl14xUhqtxlR2P3JIsFz76EDZv3gCNcBGAsYHQ/s180-c/buranko_boy_smile.png",
"https://1.bp.blogspot.com/-ZOg0qAG4ewU/Xub_uw6q0DI/AAAAAAABZio/MshyuVBpHUgaOKJtL47LmVkCf5Vge6MQQCNcBGAsYHQ/s180-c/pose_pien_uruuru_woman.png",
"https://1.bp.blogspot.com/-jlZlCg-8FAM/Xub_u8HTD1I/AAAAAAABZis/ZhUI05AZBEQpVinedZ6Xy-eIucmNuY2SQCNcBGAsYHQ/s180-c/pose_pien_uruuru_man.png",
"https://1.bp.blogspot.com/-NAu4cRevEbE/XWS5yEI290I/AAAAAAABUXE/rAFuyoWP94kjehBxqO7gcXskQMsLLcCngCLcBGAs/s180-c/pose_dance_ukareru_woman.png",
"https://1.bp.blogspot.com/-SWOiphrHWnI/XWS5x7MYwHI/AAAAAAABUXA/i_PRL_Atr08ayl9sZy9-x0uoY4zV2d5xwCLcBGAs/s180-c/pose_dance_ukareru_man.png",
"https://1.bp.blogspot.com/-H61djj8LaRk/X68akpuOknI/AAAAAAABcSA/6h-CmsvWsw0eum4hgZ6jje0f4ctNxZG9wCNcBGAsYHQ/s400/cthulhu_deep_ones.png",
"https://1.bp.blogspot.com/-RLhLrfJ2d3k/X1CLPhekfbI/AAAAAAABa5A/TwSpH3fwAakq6jp4BKs6-u_U2JkQ_u9RgCNcBGAsYHQ/s180-c/youkai_akaheru.png",
"https://1.bp.blogspot.com/-Y3XP7MTbu2E/X_f4EwvwsYI/AAAAAAABdLk/xxFAVCjrZw0vNpqjK-JQOSsFE6lWwYtSQCNcBGAsYHQ/s180-c/america_daitouryousen_man2.png",
"https://1.bp.blogspot.com/-XgQHWiZIX5U/XTPoXeBtA9I/AAAAAAABTyM/gReEQ3M5Fagm80Epsrs15-GA0T-c0bVxACLcBGAs/s180-c/kotowaza_kusaimononi_futa_man.png",
"https://4.bp.blogspot.com/-4xxTe_qeV1E/Vd7FkNUlwjI/AAAAAAAAxFc/8u9MNKtg7gg/s450/syachiku.png",
"https://1.bp.blogspot.com/-DK0sjWWt9JY/XuHCe-7SIlI/AAAAAAABZb0/eoLhwdXudAgLHd1JDw2KSjLdiV5WfmvFwCNcBGAsYHQ/s180-c/kenkoushindan_hana_boy.png",
"https://1.bp.blogspot.com/-1eGaiXw2_uI/XdttfhDU0GI/AAAAAAABWI0/w6sBI2UpvkcZzVGbn4b29Y5xJK5nBsG7gCNcBGAsYHQ/s180-c/jitensya_dekochari_man.png",
"https://1.bp.blogspot.com/-9LpolXzSEYU/XQNuXM6NvzI/AAAAAAABTH4/iAwTmVhSDGUWsUNA95l1ipEEMXajZVIqwCLcBGAs/s180-c/gang_group_black.png",
"https://1.bp.blogspot.com/-oLxGVyCwzQg/XxU0Z6BsN4I/AAAAAAABaKc/QSjbPUdXuNsyvlVMYXfI-v6tqSkx9jX4wCNcBGAsYHQ/s180-c/egypt_ammut_ammit.png",

];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
