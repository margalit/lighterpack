import Vue from "vue";

Vue.directive("select-on-focus", {
    inserted: function (el) {
        el.addEventListener("focus", (evt) => {
            el.select();
        });
    }
});

Vue.directive("focus-on-create", {
    inserted: function (el, binding) {
        if (binding.expression && binding.value || !binding.expression) {
            el.focus();
        }
    }
});

Vue.directive("focus-on-bus", {
    inserted: function (el, binding) {
        bus.$on(binding.value, () => {
            el.focus();
        });
    }
});

Vue.directive("select-on-bus", {
    inserted: function (el, binding) {
        bus.$on(binding.value, () => {
            el.select();
        });
    }
});

Vue.directive("empty-if-zero", {
    inserted: function (el) {
        el.addEventListener("focus", (evt) => {
            if (el.value === "0" || el.value === "0.00") {
                el.dataset.originalValue = el.value;
                el.value = "";
            }
        });

        el.addEventListener("blur", (evt) => {
            if (el.value === "") {
                el.value = el.dataset.originalValue || "0";
            }
        });
    }
});