(function () {
  "use strict";

  // ---- スマホのメニュー開閉 ----
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.querySelector(".sr-only").textContent = open ? "メニューを閉じる" : "メニューを開く";
    };
    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // ---- 合説の日程：終わった回は「終了」、いちばん近い回に「次回」 ----
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var next = null;
  document.querySelectorAll(".slot").forEach(function (li) {
    var p = li.getAttribute("data-date").split("-").map(Number);
    var d = new Date(p[0], p[1] - 1, p[2]);
    var status = li.querySelector(".slot-status");
    if (d < today) {
      li.classList.add("is-past");
      status.textContent = "終了";
    } else if (!next) {
      next = li;
      li.classList.add("is-next");
      status.textContent = "次回";
    }
  });

  var chip = document.querySelector("[data-next-chip]");
  var when = document.querySelector("[data-next-when]");
  var where = document.querySelector("[data-next-place]");
  if (chip && when && where) {
    if (next) {
      var md = next.querySelector(".md").textContent.split(".");
      var wd = next.querySelector(".wd").textContent;
      var detail = next.querySelector(".slot-info span").textContent;
      var time = (detail.match(/\d{1,2}:\d{2}〜\d{1,2}:\d{2}/) || [""])[0];
      when.textContent = Number(md[0]) + "/" + Number(md[1]) + "（" + wd + "）" + time;
      where.textContent = next.querySelector(".slot-info strong").textContent;
    } else {
      chip.hidden = true;
    }
  }

  // ---- フッターの年 ----
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(now.getFullYear());
})();
