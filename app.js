(() => {
  // src/data/candidates.ts
  var TAGS = ["\u7D4C\u6E08", "\u6559\u80B2", "\u74B0\u5883", "\u30C7\u30B8\u30BF\u30EB", "\u798F\u7949", "\u5730\u57DF"];
  var TAG_META = {
    \u7D4C\u6E08: { color: "#8C3B4B", label: "\u7523\u696D\u30FB\u96C7\u7528\u30FB\u8CC3\u4E0A\u3052" },
    \u6559\u80B2: { color: "#3E6B8A", label: "\u5B50\u80B2\u3066\u30FB\u5968\u5B66\u91D1\u652F\u63F4" },
    \u74B0\u5883: { color: "#4C7A54", label: "\u8FB2\u696D\u30FB\u74B0\u5883\u30FB\u30A8\u30CD\u30EB\u30AE\u30FC" },
    \u30C7\u30B8\u30BF\u30EB: { color: "#6B5B95", label: "\u884C\u653FDX\u30FB\u30B9\u30DE\u30FC\u30C8\u751F\u6D3B" },
    \u798F\u7949: { color: "#B5762B", label: "\u533B\u7642\u30FB\u798F\u7949\u30FB\u79FB\u52D5\u4EA4\u901A" },
    \u5730\u57DF: { color: "#D6A24C", label: "\u307E\u3061\u3065\u304F\u308A\u30FB\u9632\u707D\u30FB\u7A7A\u304D\u5BB6" }
  };
  var CANDIDATES = [
    {
      id: "a",
      name: "\u65B0\u6F5F\u672A\u6765\u30FB\u5B50\u80B2\u3066IT\u9023\u5408",
      tagline: "\u82E5\u8005\u306E\u5B9A\u4F4F\u30FB\u5968\u5B66\u91D1\u652F\u63F4\u3068\u884C\u653F\u30C7\u30B8\u30BF\u30EB\u5316\u3067\u9078\u3070\u308C\u308B\u65B0\u6F5F\u3078",
      weights: { \u6559\u80B2: 3, \u30C7\u30B8\u30BF\u30EB: 2, \u7D4C\u6E08: 1, \u74B0\u5883: 0, \u798F\u7949: 0, \u5730\u57DF: 0 },
      pledges: [
        "\u770C\u5185\u4F01\u696D\u306B\u5C31\u8077\u30FB\u5B9A\u4F4F\u3059\u308B\u82E5\u8005\u306E\u300C\u5968\u5B66\u91D1\u8FD4\u6E08\u652F\u63F4\u5236\u5EA6\u300D\u3092\u5168\u770C\u3067\u5927\u5E45\u62E1\u5145",
        "\u9AD8\u6821\u751F\uFF0818\u6B73\uFF09\u307E\u3067\u306E\u533B\u7642\u8CBB\u7121\u511F\u5316\u3092\u63A8\u9032\u3057\u3001\u5B50\u80B2\u3066\u4E16\u5E2F\u306E\u7D4C\u6E08\u8CA0\u62C5\u3092\u8EFD\u6E1B",
        "\u884C\u653F\u624B\u7D9A\u304D\u30FB\u8A3C\u660E\u66F8\u767A\u884C\u30FB\u6295\u7968\u6240\u6848\u5185\u3092\u30B9\u30DE\u30DB\u3067\u5373\u5B8C\u7D50\u3059\u308B\u300C\u30B9\u30DE\u30FC\u30C8\u65B0\u6F5F\u300D\u306E\u5B9F\u73FE"
      ]
    },
    {
      id: "b",
      name: "\u65B0\u6F5F\u8FB2\u696D\u30FB\u5730\u5834\u7523\u696D\u518D\u751F\u306E\u4F1A",
      tagline: "\u30D6\u30E9\u30F3\u30C9\u7C73\u30FB\u30E2\u30CE\u3065\u304F\u308A\u7523\u696D\u306E\u5F37\u5316\u3067\u82E5\u8005\u306E\u96C7\u7528\u3068\u8CC3\u4E0A\u3052\u3092\u5B9F\u73FE",
      weights: { \u7D4C\u6E08: 3, \u74B0\u5883: 2, \u5730\u57DF: 1, \u6559\u80B2: 0, \u30C7\u30B8\u30BF\u30EB: 0, \u798F\u7949: 0 },
      pledges: [
        "\u65B0\u6F5F\u7C73\u30FB\u6C34\u7523\u7269\u306E\u30D6\u30E9\u30F3\u30C9\u8F38\u51FA\u5F37\u5316\u3068\u30B9\u30DE\u30FC\u30C8\u8FB2\u696D\u30FB\u65B0\u898F\u5C31\u8FB2\u8005\u3078\u306E\u624B\u539A\u3044\u88DC\u52A9",
        "\u71D5\u4E09\u6761\u306F\u3058\u3081\u5730\u5834\u7523\u696D\u30FB\u5730\u5143\u4E2D\u5C0F\u4F01\u696D\u3078\u306E\u6295\u8CC7\u652F\u63F4\u3067\u3001\u82E5\u8005\u306E\u521D\u4EFB\u7D66\u30FB\u8CC3\u4E0A\u3052\u306E\u5E95\u4E0A\u3052",
        "\u518D\u751F\u53EF\u80FD\u30A8\u30CD\u30EB\u30AE\u30FC\u5C0E\u5165\u3068\u7701\u30A8\u30CD\u652F\u63F4\u3067\u3001\u770C\u6C11\u306E\u96FB\u6C17\u4EE3\u8CA0\u62C5\u3068\u4F01\u696D\u30B3\u30B9\u30C8\u3092\u4F4E\u6E1B"
      ]
    },
    {
      id: "c",
      name: "\u304F\u3089\u3057\u5B89\u5FC3\u30FB\u5730\u57DF\u533B\u7642\u30CD\u30C3\u30C8",
      tagline: "\u3069\u3053\u306B\u4F4F\u3093\u3067\u3044\u3066\u3082\u533B\u7642\u3068\u798F\u7949\u304C\u884C\u304D\u5C4A\u304F\u3001\u5B89\u5FC3\u306E\u65B0\u6F5F\u3065\u304F\u308A",
      weights: { \u798F\u7949: 3, \u5730\u57DF: 2, \u6559\u80B2: 1, \u7D4C\u6E08: 0, \u74B0\u5883: 0, \u30C7\u30B8\u30BF\u30EB: 0 },
      pledges: [
        "\u533B\u5E2B\u30FB\u770B\u8B77\u5E2B\u4E0D\u8DB3\u3092\u89E3\u6D88\u3057\u3001\u770C\u5185\u5168\u5730\u57DF\u306E\u5C0F\u5150\u79D1\u30FB\u7523\u5A66\u4EBA\u79D1\u30FB\u6551\u6025\u533B\u7642\u4F53\u5236\u3092\u7DAD\u6301\u30FB\u5F37\u5316",
        "\u9AD8\u9F62\u8005\u3084\u5B66\u751F\u306E\u901A\u5B66\u30FB\u901A\u9662\u3092\u652F\u3048\u308B\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D0\u30B9\u30FB\u30C7\u30DE\u30F3\u30C9\u30BF\u30AF\u30B7\u30FC\u306E\u5168\u770C\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u7DAD\u6301",
        "\u8C6A\u96EA\u5730\u5E2F\u306E\u9664\u96EA\u652F\u63F4\u4F53\u5236\u3092\u5F37\u5316\u3057\u3001\u51AC\u5834\u3067\u3082\u8AB0\u3082\u304C\u5B89\u5FC3\u3057\u3066\u66AE\u3089\u305B\u308B\u5730\u57DF\u3065\u304F\u308A"
      ]
    },
    {
      id: "d",
      name: "\u65B0\u6F5F\u5730\u57DF\u6D3B\u6027\u30FB\u307E\u3061\u3065\u304F\u308A\u6539\u9769",
      tagline: "\u65B0\u6F5F\u99C5\u5468\u8FBA\u30FB\u4E2D\u5FC3\u8857\u306E\u518D\u958B\u767A\u3068\u7A7A\u304D\u5BB6\u518D\u751F\u3067\u8CD1\u308F\u3044\u3092\u5275\u51FA",
      weights: { \u5730\u57DF: 3, \u7D4C\u6E08: 2, \u30C7\u30B8\u30BF\u30EB: 1, \u6559\u80B2: 0, \u74B0\u5883: 0, \u798F\u7949: 0 },
      pledges: [
        "\u65B0\u6F5F\u99C5\u5468\u8FBA\u30FB\u770C\u5185\u4E3B\u8981\u90FD\u5E02\u306E\u4EA4\u901A\u30CF\u30D6\u518D\u958B\u767A\u3092\u9032\u3081\u3001\u901A\u52E4\u30FB\u901A\u5B66\u30FB\u89B3\u5149\u306E\u5229\u4FBF\u6027\u3092\u98DB\u8E8D\u5411\u4E0A",
        "\u5897\u3048\u7D9A\u3051\u308B\u7A7A\u304D\u5BB6\u3092\u30EA\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u3057\u3001\u82E5\u8005\u3084\u79FB\u4F4F\u8005\u306E\u4F4F\u307E\u3044\u30FB\u8D77\u696D\u62E0\u70B9\u3068\u3057\u3066\u5229\u6D3B\u7528",
        "\u516C\u5171\u65BD\u8A2D\u306E\u8001\u673D\u5316\u5BFE\u7B56\u3068\u8CA1\u653F\u306E\u52B9\u7387\u5316\u3092\u9032\u3081\u3001\u5C06\u6765\u4E16\u4EE3\u306B\u30C4\u30B1\u3092\u6B8B\u3055\u306A\u3044\u6301\u7D9A\u53EF\u80FD\u306A\u307E\u3061\u3065\u304F\u308A"
      ]
    }
  ];
  var QUESTIONS = [
    {
      q: "\u65B0\u6F5F\u3067\u66AE\u3089\u3059\u3046\u3048\u3067\u3001\u5B50\u80B2\u3066\u3084\u5B66\u3073\u306E\u74B0\u5883\u3067\u6700\u3082\u91CD\u8996\u3057\u305F\u3044\u653F\u7B56\u306F\uFF1F",
      options: [
        { text: "\u5968\u5B66\u91D1\u8FD4\u6E08\u306E\u7D66\u4ED8\u652F\u63F4\u3084\u3001\u9AD8\u6821\u751F\u307E\u3067\u306E\u533B\u7642\u8CBB\u7121\u511F\u5316\u3092\u9032\u3081\u3066\u307B\u3057\u3044", weights: { \u6559\u80B2: 2 } },
        { text: "\u884C\u653F\u624B\u7D9A\u304D\u3084\u8A3C\u660E\u66F8\u767A\u884C\u304C\u30B9\u30DE\u30DB\u3067\u7C21\u5358\u306B\u5B8C\u7D50\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u3066\u307B\u3057\u3044", weights: { \u30C7\u30B8\u30BF\u30EB: 2 } }
      ]
    },
    {
      q: "\u5C31\u8077\u3084\u5730\u5143\u306E\u4ED5\u4E8B\u306B\u3064\u3044\u3066\u3001\u3069\u306E\u3088\u3046\u306A\u53D6\u308A\u7D44\u307F\u3092\u671F\u5F85\u3059\u308B\uFF1F",
      options: [
        { text: "\u5730\u5143\u4F01\u696D\u3084\u5730\u5834\u7523\u696D\uFF08\u30E2\u30CE\u3065\u304F\u308A\u30FB\u8FB2\u696D\uFF09\u3078\u306E\u652F\u63F4\u3067\u8CC3\u4E0A\u3052\u3084\u96C7\u7528\u3092\u5897\u3084\u3057\u3066\u307B\u3057\u3044", weights: { \u7D4C\u6E08: 2 } },
        { text: "IT\u4F01\u696D\u306E\u8A98\u81F4\u3084\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF\u74B0\u5883\u3092\u6574\u3048\u3001\u770C\u5916\u306B\u51FA\u305A\u306B\u50CD\u3051\u308B\u9078\u629E\u80A2\u304C\u307B\u3057\u3044", weights: { \u30C7\u30B8\u30BF\u30EB: 1, \u7D4C\u6E08: 1 } }
      ]
    },
    {
      q: "\u3053\u308C\u304B\u3089\u306E\u65B0\u6F5F\u306E\u8FB2\u696D\u3084\u81EA\u7136\u30FB\u30A8\u30CD\u30EB\u30AE\u30FC\u306B\u3064\u3044\u3066\u671B\u3080\u306E\u306F\uFF1F",
      options: [
        { text: "\u65B0\u6F5F\u7C73\u30FB\u8FB2\u7523\u7269\u306E\u30D6\u30E9\u30F3\u30C9\u5F37\u5316\u3068\u30B9\u30DE\u30FC\u30C8\u8FB2\u696D\u3067\u300E\u7A3C\u3052\u308B\u8FB2\u696D\u300F\u306B\u3057\u3066\u307B\u3057\u3044", weights: { \u74B0\u5883: 2, \u7D4C\u6E08: 1 } },
        { text: "\u518D\u751F\u53EF\u80FD\u30A8\u30CD\u30EB\u30AE\u30FC\u306E\u666E\u53CA\u3067\u96FB\u6C17\u4EE3\u3092\u6291\u3048\u3001\u74B0\u5883\u3068\u81EA\u7136\u3092\u5B88\u3063\u3066\u307B\u3057\u3044", weights: { \u74B0\u5883: 2, \u5730\u57DF: 1 } }
      ]
    },
    {
      q: "\u533B\u7642\u3084\u65E5\u5E38\u306E\u66AE\u3089\u3057\u3067\u3001\u6700\u3082\u5B89\u5FC3\u3067\u304D\u308B\u653F\u7B56\u306F\uFF1F",
      options: [
        { text: "\u5730\u57DF\u3054\u3068\u306E\u5C0F\u5150\u79D1\u30FB\u7523\u5A66\u4EBA\u79D1\u30FB\u6551\u6025\u533B\u7642\u4F53\u5236\u3092\u7DAD\u6301\u30FB\u5F37\u5316\u3057\u3066\u307B\u3057\u3044", weights: { \u798F\u7949: 2 } },
        { text: "\u30D0\u30B9\u8DEF\u7DDA\u3084\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u4EA4\u901A\u3092\u7DAD\u6301\u3057\u3001\u901A\u5B66\u3084\u9AD8\u9F62\u8005\u306E\u79FB\u52D5\u624B\u6BB5\u3092\u5B88\u3063\u3066\u307B\u3057\u3044", weights: { \u798F\u7949: 1, \u5730\u57DF: 1 } }
      ]
    },
    {
      q: "\u51AC\u306E\u66AE\u3089\u3057\u3084\u9632\u72AF\u30FB\u9632\u707D\u5BFE\u7B56\u3067\u529B\u3092\u5165\u308C\u3066\u307B\u3057\u3044\u3053\u3068\u306F\uFF1F",
      options: [
        { text: "\u8C6A\u96EA\u5730\u5E2F\u306E\u9664\u96EA\u652F\u63F4\u3084\u8001\u673D\u5316\u30A4\u30F3\u30D5\u30E9\u306E\u6574\u5099\u3067\u51AC\u5834\u306E\u5B89\u5FC3\u30FB\u5B89\u5168\u3092\u5B88\u3063\u3066\u307B\u3057\u3044", weights: { \u5730\u57DF: 2 } },
        { text: "\u5897\u3048\u308B\u7A7A\u304D\u5BB6\u3092\u30EA\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u3057\u3066\u3001\u82E5\u8005\u306E\u4F4F\u307E\u3044\u3084\u4EA4\u6D41\u62E0\u70B9\u306B\u518D\u751F\u3057\u3066\u307B\u3057\u3044", weights: { \u5730\u57DF: 1, \u7D4C\u6E08: 1 } }
      ]
    },
    {
      q: "\u65B0\u6F5F\u306E\u90FD\u5E02\u3065\u304F\u308A\u3084\u884C\u653F\u30FB\u8CA1\u653F\u306B\u3064\u3044\u3066\u6C42\u3081\u308B\u306E\u306F\uFF1F",
      options: [
        { text: "\u65B0\u6F5F\u99C5\u5468\u8FBA\u3084\u4E2D\u5FC3\u90FD\u5E02\u306E\u518D\u958B\u767A\u3092\u9032\u3081\u3001\u4EA4\u901A\u3068\u8857\u306E\u8CD1\u308F\u3044\u3092\u5411\u4E0A\u3055\u305B\u3066\u307B\u3057\u3044", weights: { \u5730\u57DF: 2, \u7D4C\u6E08: 1 } },
        { text: "\u516C\u5171\u65BD\u8A2D\u306E\u30E0\u30C0\u3092\u6291\u3048\u3001\u5B50\u80B2\u3066\u4E16\u5E2F\u3084\u82E5\u8005\u3078\u306E\u76F4\u63A5\u652F\u63F4\u306B\u8CA1\u653F\u3092\u4F7F\u3063\u3066\u307B\u3057\u3044", weights: { \u6559\u80B2: 1, \u30C7\u30B8\u30BF\u30EB: 1 } }
      ]
    }
  ];
  var TYPE_NAMES = {
    \u6559\u80B2: "\u5B50\u80B2\u3066\u30FB\u5B66\u3073\u672A\u6765\u91CD\u8996\u30BF\u30A4\u30D7",
    \u7D4C\u6E08: "\u7523\u696D\u30FB\u96C7\u7528\u30FB\u8CC3\u4E0A\u3052\u91CD\u8996\u30BF\u30A4\u30D7",
    \u74B0\u5883: "\u8FB2\u696D\u30FB\u74B0\u5883\u5171\u751F\u30BF\u30A4\u30D7",
    \u30C7\u30B8\u30BF\u30EB: "\u884C\u653FDX\u30FB\u30B9\u30DE\u30FC\u30C8\u751F\u6D3B\u91CD\u8996\u30BF\u30A4\u30D7",
    \u798F\u7949: "\u533B\u7642\u30FB\u798F\u7949\u30FB\u5B89\u5FC3\u751F\u6D3B\u91CD\u8996\u30BF\u30A4\u30D7",
    \u5730\u57DF: "\u307E\u3061\u3065\u304F\u308A\u30FB\u9632\u707D\u91CD\u8996\u30BF\u30A4\u30D7"
  };
  var MUNICIPAL_PLEDGES = [
    {
      id: "gov",
      region: "\u770C\u5168\u57DF",
      name: "\u65B0\u6F5F\u770C\u77E5\u4E8B (\u82B1\u89D2\u82F1\u4E16)",
      mayorTitle: "\u65B0\u6F5F\u770C\u77E5\u4E8B",
      scaleType: "\u770C\u5168\u57DF",
      headline: "\u4EBA\u53E3\u6E1B\u5C11\u3068\u707D\u5BB3\u30EA\u30B9\u30AF\u306B\u7ACB\u3061\u5411\u304B\u3046\u3001\u7523\u696D\u30FB\u66AE\u3089\u3057\u306E\u57FA\u76E4\u7D44\u307F\u66FF\u3048",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u5C31\u8FB2\u30FB\u5B9A\u4F4F\u652F\u63F4\u3068\u4EBA\u53E3\u5897\u52A0\u57FA\u76E4\u306E\u78BA\u7ACB",
        "\u2461 \u5B89\u5FC3\u30FB\u5B89\u5168\u306A\u770C\u571F\u3065\u304F\u308A\u3068\u8C6A\u96EA\u30FB\u707D\u5BB3\u5BFE\u7B56\u306E\u63A8\u9032",
        "\u2462 \u5730\u5834\u7523\u696D\u30FB\u65B0\u6F5F\u7C73\u306E\u6D77\u5916\u30D6\u30E9\u30F3\u30C9\u5C55\u958B\u3068\u770C\u5185\u8CC3\u4E0A\u3052\u63A8\u9032"
      ],
      officialUrl: "https://koyaku.47story.jp/gov/niigata"
    },
    {
      id: "15100",
      region: "\u4E0B\u8D8A",
      name: "\u65B0\u6F5F\u5E02",
      mayorTitle: "\u4E2D\u539F\u516B\u4E00 \u5E02\u9577",
      scaleType: "\u653F\u4EE4\u6307\u5B9A\u90FD\u5E02",
      headline: "\u90FD\u5FC3\u306E\u8CD1\u308F\u3044\u5275\u51FA\u3068\u62E0\u70B9\u30BD\u30D5\u30A3\u30A2\u578B\u90FD\u5E02\u306E\u69CB\u7BC9",
      tags: ["\u7523\u696D\u30FB\u96C7\u7528", "\u66AE\u3089\u3057\u30FB\u533B\u7642"],
      details: [
        "\u2460 \u65B0\u6F5F\u99C5\u5468\u8FBA\u518D\u958B\u767A\u3068\u4EA4\u901A\u30CF\u30D6\u6A5F\u80FD\u306E\u5F37\u5316",
        "\u2461 \u5B50\u80B2\u3066\u4E16\u5E2F\u306E\u533B\u7642\u8CBB\u8CA0\u62C5\u8EFD\u6E1B\u3068\u6559\u80B2\u74B0\u5883\u306E\u5411\u4E0A",
        "\u2462 \u62E0\u70B9\u30BD\u30D5\u30A3\u30A2\u578B\u90FD\u5E02\u3068\u3057\u3066\u306E\u9632\u707D\u30FB\u30C7\u30B8\u30BF\u30EB\u884C\u653F\u63A8\u9032"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15100/"
    },
    {
      id: "15202",
      region: "\u4E2D\u8D8A",
      name: "\u9577\u5CA1\u5E02",
      mayorTitle: "\u78EF\u7530\u9054\u4F38 \u5E02\u9577",
      scaleType: "\u5730\u65B9\u4E2D\u6838\u5E02",
      headline: "\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u63A8\u9032\u3068\u5730\u57DF\u9632\u707D\u30FB\u5B50\u80B2\u3066\u306E\u5145\u5B9F",
      tags: ["\u9632\u707D\u30FB\u5B89\u5168", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u8C6A\u96EA\u5BFE\u7B56\u3068\u30C7\u30B8\u30BF\u30EB\u9632\u707D\u30A4\u30F3\u30D5\u30E9\u306E\u63A8\u9032",
        "\u2461 \u7C73\u767E\u4FF5\u306E\u7CBE\u795E\u306B\u57FA\u3065\u304F\u6B21\u4E16\u4EE3\u4EBA\u6750\u80B2\u6210\u3068\u5B50\u80B2\u3066\u5B9A\u4F4F\u652F\u63F4",
        "\u2462 \u9577\u5CA1\u82B1\u706B\u3068\u6280\u8853\u9769\u65B0\u3092\u751F\u304B\u3057\u305F\u5730\u65B9\u5275\u751F"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15202/"
    },
    {
      id: "15222",
      region: "\u4E0A\u8D8A",
      name: "\u4E0A\u8D8A\u5E02",
      mayorTitle: "\u4E2D\u5DDD\u5E79\u592A \u5E02\u9577",
      scaleType: "\u5730\u65B9\u4E2D\u6838\u5E02",
      headline: "\u901A\u5E74\u89B3\u5149\u30FB\u7523\u696D\u632F\u8208\u3068\u884C\u653FDX\u63A8\u9032",
      tags: ["\u884C\u653F\u30FBDX", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u884C\u653F\u624B\u7D9A\u304D\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u5316\u3068\u30B9\u30DE\u30FC\u30C8\u5E02\u5F79\u6240",
        "\u2461 \u901A\u5E74\u89B3\u5149\u306E\u5F37\u5316\u3068\u8FB2\u6797\u6C34\u7523\u696D\u306E\u6240\u5F97\u5411\u4E0A\u652F\u63F4",
        "\u2462 \u5730\u57DF\u4EA4\u901A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u7DAD\u6301\u3068\u5B50\u80B2\u3066\u74B0\u5883\u6574\u5099"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15222/"
    },
    {
      id: "15204",
      region: "\u4E2D\u8D8A",
      name: "\u4E09\u6761\u5E02",
      mayorTitle: "\u6EDD\u6CA2\u4EAE \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u4E2D\u898F\u6A21",
      headline: "\u71D5\u4E09\u6761\u306E\u935B\u51B6\u30FB\u3082\u306E\u3065\u304F\u308A\u7523\u696D\u3068\u5B50\u80B2\u3066\u652F\u63F4",
      tags: ["\u7523\u696D\u30FB\u96C7\u7528", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u30AA\u30FC\u30D7\u30F3\u30D5\u30A1\u30AF\u30C8\u30EA\u30FC\u3068\u5730\u5834\u88FD\u9020\u696D\u306E\u6D77\u5916\u5C55\u958B\u652F\u63F4",
        "\u2461 \u7D66\u98DF\u8CBB\u8EFD\u6E1B\u3068\u82E5\u3044\u4E16\u4EE3\u306E\u4F4F\u5B85\u53D6\u5F97\u52A9\u6210",
        "\u2462 \u30C7\u30B8\u30BF\u30EB\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u62E0\u70B9\u306E\u5F62\u6210"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15204/"
    },
    {
      id: "15205",
      region: "\u4E2D\u8D8A",
      name: "\u67CF\u5D0E\u5E02",
      mayorTitle: "\u685C\u4E95\u96C5\u6D69 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u4E2D\u898F\u6A21",
      headline: "\u30A8\u30CD\u30EB\u30AE\u30FC\u30B9\u30DE\u30FC\u30C8\u30B7\u30C6\u30A3\u3068\u533B\u7642\u30FB\u798F\u7949\u306E\u5145\u5B9F",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u5730\u57DF\u533B\u7642\u4F53\u5236\u306E\u78BA\u4FDD\u3068\u9AD8\u9F62\u8005\u79FB\u52D5\u4EA4\u901A\u306E\u652F\u63F4",
        "\u2461 \u6B21\u4E16\u4EE3\u30A8\u30CD\u30EB\u30AE\u30FC\u7523\u696D\u3068\u5730\u5143\u96C7\u7528\u306E\u5275\u51FA",
        "\u2462 \u5E02\u6C11\u751F\u6D3B\u3092\u652F\u3048\u308B\u9632\u707D\u30FB\u9632\u72AF\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u5F37\u5316"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15205/"
    },
    {
      id: "15206",
      region: "\u4E0B\u8D8A",
      name: "\u65B0\u767A\u7530\u5E02",
      mayorTitle: "\u4E8C\u968E\u5802\u99A8 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u4E2D\u898F\u6A21",
      headline: "\u98DF\u306E\u5FAA\u74B0\u3068\u5B50\u80B2\u3066\u30FB\u9AD8\u9F62\u8005\u798F\u7949\u306E\u5145\u5B9F",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u66AE\u3089\u3057\u30FB\u533B\u7642"],
      details: [
        "\u2460 \u30AA\u30FC\u30AC\u30CB\u30C3\u30AF\u8FB2\u696D\u3068\u5730\u7523\u5730\u6D88\u306E\u63A8\u9032",
        "\u2461 \u9AD8\u6821\u751F\u307E\u3067\u306E\u533B\u7642\u8CBB\u52A9\u6210\u3068\u798F\u7949\u30D1\u30B9\u306E\u62E1\u5145",
        "\u2462 \u6B74\u53F2\u30FB\u57CE\u4E0B\u753A\u3092\u751F\u304B\u3057\u305F\u89B3\u5149\u307E\u3061\u3065\u304F\u308A"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15206/"
    },
    {
      id: "15208",
      region: "\u4E2D\u8D8A",
      name: "\u5C0F\u5343\u8C37\u5E02",
      mayorTitle: "\u5BAE\u5D0E\u60A6\u7537 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u9326\u9BC9\u30FB\u9326\u7E54\u7523\u696D\u306E\u632F\u8208\u3068\u884C\u653FDX",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u884C\u653F\u30FBDX"],
      details: [
        "\u2460 \u9326\u9BC9\u30FB\u4F1D\u7D71\u5DE5\u82B8\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u5C55\u958B\u3068\u89B3\u5149\u5F37\u5316",
        "\u2461 \u6551\u6025\u533B\u7642\u4F53\u5236\u306E\u7DAD\u6301\u3068\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u4EA4\u901A\u6574\u5099",
        "\u2462 \u96EA\u56FD\u306B\u304A\u3051\u308B\u5B89\u5168\u306A\u9664\u96EA\u652F\u63F4\u306E\u5B9F\u65BD"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15208/"
    },
    {
      id: "15209",
      region: "\u4E0B\u8D8A",
      name: "\u52A0\u8302\u5E02",
      mayorTitle: "\u85E4\u7530\u660E\u7F8E \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u6850\u7BAA\u7B25\u30FB\u4F1D\u7D71\u5DE5\u82B8\u3068\u5B50\u80B2\u3066\u74B0\u5883\u306E\u6539\u5584",
      tags: ["\u884C\u653F\u30FBDX", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u82E5\u8005\u306E\u5B9A\u4F4F\u30FB\u5B50\u80B2\u3066\u652F\u63F4\u91D1\u306E\u7D66\u4ED8",
        "\u2461 \u900F\u660E\u6027\u306E\u9AD8\u3044\u884C\u653F\u904B\u55B6\u3068\u30AA\u30F3\u30E9\u30A4\u30F3\u7A93\u53E3\u306E\u62E1\u5145",
        "\u2462 \u52A0\u8302\u5C71\u516C\u5712\u30FB\u5546\u5E97\u8857\u306E\u8CD1\u308F\u3044\u518D\u751F"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15209/"
    },
    {
      id: "15210",
      region: "\u4E2D\u8D8A",
      name: "\u5341\u65E5\u753A\u5E02",
      mayorTitle: "\u95A2\u53E3\u82B3\u53F2 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u5927\u5730\u306E\u82B8\u8853\u796D\u30FB\u96EA\u56FD\u6587\u5316\u3068\u5B50\u80B2\u3066\u652F\u63F4",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u5927\u5730\u306E\u82B8\u8853\u796D\u3092\u6D3B\u7528\u3057\u305F\u901A\u5E74\u89B3\u5149\u30FB\u5730\u57DF\u6D3B\u6027\u5316",
        "\u2461 \u96EA\u56FD\u306E\u5B89\u5168\u306A\u901A\u5B66\u8DEF\u78BA\u4FDD\u3068\u5B50\u80B2\u3066\u52A9\u6210",
        "\u2462 \u7E54\u7269\u30FB\u8FB2\u696D\u306E\u632F\u8208\u3068\u65B0\u898F\u5C31\u8FB2\u8005\u652F\u63F4"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15210/"
    },
    {
      id: "15211",
      region: "\u4E2D\u8D8A",
      name: "\u898B\u9644\u5E02",
      mayorTitle: "\u7A32\u7530\u654F\u6075 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u30B9\u30DE\u30FC\u30C8\u30A6\u30A8\u30EB\u30CD\u30B9\u307F\u3064\u3051\u3068\u5065\u5E78\u90FD\u5E02\u306E\u9032\u5316",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u66AE\u3089\u3057\u30FB\u533B\u7642"],
      details: [
        "\u2460 \u5065\u5EB7\u5BFF\u547D\u5EF6\u4F38\u30D7\u30ED\u30B0\u30E9\u30E0\u3068\u6B69\u3044\u3066\u66AE\u3089\u305B\u308B\u307E\u3061\u3065\u304F\u308A",
        "\u2461 \u5B50\u80B2\u3066\u652F\u63F4\u65BD\u8A2D\u30FB\u4FDD\u80B2\u74B0\u5883\u306E\u5145\u5B9F",
        "\u2462 \u5730\u57DF\u9632\u707D\u30FB\u30A4\u30F3\u30D5\u30E9\u8010\u9707\u5316\u306E\u63A8\u9032"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15211/"
    },
    {
      id: "15212",
      region: "\u4E0B\u8D8A",
      name: "\u6751\u4E0A\u5E02",
      mayorTitle: "\u9AD8\u6A4B\u90A6\u82B3 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u4E09\u9762\u5DDD\u306E\u9BAD\u30FB\u6751\u4E0A\u6728\u5F6B\u5806\u6731\u3068\u5730\u57DF\u533B\u7642\u78BA\u4FDD",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u5317\u8D8A\u5F8C\u5730\u57DF\u306E\u533B\u7642\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u78BA\u4FDD\u3068\u6551\u6025\u4F53\u5236",
        "\u2461 \u6C34\u7523\u696D\u30FB\u6797\u696D\u306E\u632F\u8208\u3068\u5B9A\u4F4F\u5968\u52B1\u91D1\u5236\u5EA6",
        "\u2462 \u6751\u4E0A\u753A\u5C4B\u30FB\u6B74\u53F2\u6587\u5316\u3092\u751F\u304B\u3057\u305F\u89B3\u5149\u5275\u51FA"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15212/"
    },
    {
      id: "15213",
      region: "\u4E2D\u8D8A",
      name: "\u71D5\u5E02",
      mayorTitle: "\u9234\u6728\u529B \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u4E2D\u898F\u6A21",
      headline: "\u6D0B\u98DF\u5668\u30FB\u30AB\u30C8\u30E9\u30EA\u30FC\u7523\u696D\u3068\u5B50\u80B2\u3066\u5FDC\u63F4",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u71D5\u30D6\u30E9\u30F3\u30C9\u306E\u30B0\u30ED\u30FC\u30D0\u30EB\u5C55\u958B\u3068\u8077\u4EBA\u80B2\u6210",
        "\u2461 \u5168\u5929\u5019\u578B\u3053\u3069\u3082\u904A\u622F\u65BD\u8A2D\u306E\u8A2D\u7F6E\u3068\u624B\u539A\u3044\u5B50\u80B2\u3066\u652F\u63F4",
        "\u2462 \u6C34\u5BB3\u5BFE\u7B56\u3068\u5B89\u5168\u306A\u5730\u57DF\u793E\u4F1A\u306E\u69CB\u7BC9"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15213/"
    },
    {
      id: "15216",
      region: "\u4E0A\u8D8A",
      name: "\u7CF8\u9B5A\u5DDD\u5E02",
      mayorTitle: "\u7C73\u7530\u5FB9 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u30E6\u30CD\u30B9\u30B3\u4E16\u754C\u30B8\u30AA\u30D1\u30FC\u30AF\u3068\u5730\u57DF\u533B\u7642\u4F53\u5236\u7DAD\u6301",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u30B8\u30AA\u30D1\u30FC\u30AF\u89B3\u5149\u63A8\u9032\u3068\u5730\u5834\u4F01\u696D\u30FB\u5546\u696D\u306E\u6D3B\u6027\u5316",
        "\u2461 \u5357\u533B\u7642\u570F\u306E\u75C5\u9662\u9023\u643A\u3068\u6551\u6025\u533B\u7642\u4F53\u5236\u306E\u7DAD\u6301",
        "\u2462 \u79FB\u4F4F\u5B9A\u4F4F\u8005\u3078\u306E\u4F4F\u5B85\u53D6\u5F97\u652F\u63F4"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15216/"
    },
    {
      id: "15217",
      region: "\u4E0A\u8D8A",
      name: "\u5999\u9AD8\u5E02",
      mayorTitle: "\u57CE\u6238\u82F1\u660E \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u56FD\u969B\u30EA\u30BE\u30FC\u30C8\u30FB\u30B9\u30AD\u30FC\u89B3\u5149\u3068\u5B50\u80B2\u3066\u5B9A\u4F4F",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u66AE\u3089\u3057\u30FB\u533B\u7642"],
      details: [
        "\u2460 \u56FD\u969B\u30DE\u30A6\u30F3\u30C6\u30F3\u30EA\u30BE\u30FC\u30C8\u306E\u5F62\u6210\u3068\u901A\u5E74\u89B3\u5149",
        "\u2461 \u82E5\u8005\u4F4F\u5B85\u53D6\u5F97\u30FB\u5B50\u80B2\u3066\u652F\u63F4\u91D1\u306E\u62E1\u5145",
        "\u2462 \u9AD8\u9F62\u8005\u306E\u79FB\u52D5\u624B\u6BB5\u3068\u533B\u7642\u30A2\u30AF\u30BB\u30B9\u306E\u78BA\u4FDD"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15217/"
    },
    {
      id: "15218",
      region: "\u4E0B\u8D8A",
      name: "\u4E94\u6CC9\u5E02",
      mayorTitle: "\u7530\u908A\u6B63\u5E78 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u30CB\u30C3\u30C8\u30FB\u30C1\u30E5\u30FC\u30EA\u30C3\u30D7\u7523\u696D\u3068\u5B50\u80B2\u3066\u74B0\u5883\u5411\u4E0A",
      tags: ["\u7523\u696D\u30FB\u96C7\u7528", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u65E5\u672C\u4E00\u306E\u30CB\u30C3\u30C8\u7523\u5730\u30D6\u30E9\u30F3\u30C9\u5316\u3068\u8CA9\u8DEF\u62E1\u5927",
        "\u2461 \u5B50\u80B2\u3066\u30FB\u6559\u80B2\u8CBB\u8CA0\u62C5\u306E\u8EFD\u6E1B\u3068\u82E5\u8005\u5B9A\u4F4F\u63A8\u9032",
        "\u2462 \u6E05\u6D41\u3068\u81EA\u7136\u3092\u751F\u304B\u3057\u305F\u74B0\u5883\u3065\u304F\u308A"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15218/"
    },
    {
      id: "15223",
      region: "\u4E0B\u8D8A",
      name: "\u963F\u8CC0\u91CE\u5E02",
      mayorTitle: "\u52A0\u85E4\u535A\u5E78 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u767D\u9CE5\u306E\u74E2\u6E56\u30FB\u6709\u6A5F\u8FB2\u696D\u3068\u5B50\u80B2\u3066\u533B\u7642\u652F\u63F4",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u66AE\u3089\u3057\u30FB\u533B\u7642"],
      details: [
        "\u2460 \u6709\u6A5F\u8FB2\u696D\u306E\u63A8\u9032\u3068\u5B89\u5FC3\u306A\u5B66\u6821\u7D66\u98DF\u306E\u63D0\u4F9B",
        "\u2461 \u5730\u57DF\u533B\u7642\u30FB\u9AD8\u9F62\u8005\u30C7\u30DE\u30F3\u30C9\u30D0\u30B9\u306E\u904B\u884C\u7DAD\u6301",
        "\u2462 \u89B3\u5149\u62E0\u70B9\u3068\u3057\u3066\u306E\u74E2\u6E56\u30FB\u4E94\u982D\u6E29\u6CC9\u90F7\u306E\u5F37\u5316"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15223/"
    },
    {
      id: "15224",
      region: "\u4F50\u6E21",
      name: "\u4F50\u6E21\u5E02",
      mayorTitle: "\u6E21\u8FBA\u7ADC\u4E94 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u4E2D\u898F\u6A21",
      headline: "\u4F50\u6E21\u91D1\u5C71\u4E16\u754C\u907A\u7523\u30FB\u30C8\u30AD\u306E\u5CF6\u3068\u5CF6\u5185\u533B\u7642\u30FB\u4EA4\u901A\u78BA\u4FDD",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u4F50\u6E21\u91D1\u5C71\u4E16\u754C\u907A\u7523\u3092\u751F\u304B\u3057\u305F\u89B3\u5149\u5275\u51FA\u3068\u822A\u8DEF\u652F\u63F4",
        "\u2461 \u5CF6\u5185\u533B\u7642\u4F53\u5236\u306E\u7DAD\u6301\u3068\u30C9\u30AF\u30BF\u30FC\u30D8\u30EA\u9023\u643A",
        "\u2462 \u82E5\u8005\u306E\u5CF6\u5185\u5C31\u8077\u52A9\u6210\u3068\u5B9A\u4F4F\u4FC3\u9032"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15224/"
    },
    {
      id: "15225",
      region: "\u4E2D\u8D8A",
      name: "\u9B5A\u6CBC\u5E02",
      mayorTitle: "\u5185\u7530\u5E79\u592B \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u9B5A\u6CBC\u7523\u30B3\u30B7\u30D2\u30AB\u30EA\u3068\u96EA\u56FD\u533B\u7642\u30FB\u89B3\u5149\u632F\u8208",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u30B3\u30B7\u30D2\u30AB\u30EA\u306E\u30D6\u30E9\u30F3\u30C9\u4FDD\u8B77\u3068\u30B9\u30DE\u30FC\u30C8\u8FB2\u696D\u63A8\u9032",
        "\u2461 \u9B5A\u6CBC\u57FA\u5E79\u75C5\u9662\u3068\u306E\u9023\u643A\u3068\u5730\u57DF\u533B\u7642\u306E\u5145\u5B9F",
        "\u2462 \u8C6A\u96EA\u5730\u5E2F\u306E\u9053\u8DEF\u9664\u96EA\u3068\u751F\u6D3B\u57FA\u76E4\u7DAD\u6301"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15225/"
    },
    {
      id: "15226",
      region: "\u4E2D\u8D8A",
      name: "\u5357\u9B5A\u6CBC\u5E02",
      mayorTitle: "\u6797\u8302\u7537 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u96EA\u56FD\u30EA\u30BE\u30FC\u30C8\u30FB\u516B\u6D77\u5C71\u3068\u533B\u7642\u30FB\u5B50\u80B2\u3066\u5F37\u5316",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u30B9\u30AD\u30FC\u30EA\u30BE\u30FC\u30C8\u3068\u56FD\u969B\u5927\u5B66\u9023\u643A\u306B\u3088\u308B\u56FD\u969B\u89B3\u5149",
        "\u2461 \u5730\u57DF\u533B\u7642\u30FB\u5C0F\u5150\u79D1\u4F53\u5236\u306E\u7DAD\u6301\u5F37\u5316",
        "\u2462 \u82E5\u8005\u306E\u5730\u5143\u5C31\u696D\u30FB\u8D77\u696D\u652F\u63F4"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15226/"
    },
    {
      id: "15227",
      region: "\u4E0B\u8D8A",
      name: "\u80CE\u5185\u5E02",
      mayorTitle: "\u4E95\u7551\u660E\u5F66 \u5E02\u9577",
      scaleType: "\u5E02\u30FB\u5C0F\u898F\u6A21",
      headline: "\u6D0B\u529B\u767A\u96FB\u30FB\u30C1\u30E5\u30FC\u30EA\u30C3\u30D7\u3068\u9632\u707D\u30FB\u5B50\u80B2\u3066\u306E\u5145\u5B9F",
      tags: ["\u9632\u707D\u30FB\u5B89\u5168", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u6D0B\u4E0A\u98A8\u529B\u767A\u96FB\u3068\u30AF\u30EA\u30FC\u30F3\u30A8\u30CD\u30EB\u30AE\u30FC\u306E\u6D3B\u7528\u63A8\u9032",
        "\u2461 \u6C34\u5BB3\u30FB\u5730\u9707\u5BFE\u7B56\u3068\u907F\u96E3\u4F53\u5236\u306E\u5F37\u5316",
        "\u2462 \u5B50\u80B2\u3066\u4E16\u4EE3\u3078\u306E\u624B\u5F53\u3068\u6559\u80B2\u74B0\u5883\u306E\u6574\u5099"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15227/"
    },
    {
      id: "15307",
      region: "\u4E0B\u8D8A",
      name: "\u8056\u7C60\u753A",
      mayorTitle: "\u4E00\u898B\u4E00\u592B \u753A\u9577",
      scaleType: "\u753A\u30FB\u5C0F\u898F\u6A21",
      headline: "\u65B0\u6F5F\u6771\u6E2F\u30FB\u5DE5\u696D\u56E3\u5730\u3068\u884C\u8CA1\u653F\u30FB\u5B50\u80B2\u3066\u74B0\u5883",
      tags: ["\u884C\u653F\u30FBDX", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u6E2F\u6E7E\u30FB\u5DE5\u696D\u56E3\u5730\u306E\u7A0E\u6E90\u6D3B\u7528\u306B\u3088\u308B\u624B\u539A\u3044\u798F\u7949",
        "\u2461 \u5C0F\u4E2D\u5B66\u6821\u306EICT\u6559\u80B2\u63A8\u9032\u3068\u7D66\u98DF\u8CBB\u652F\u63F4",
        "\u2462 \u5B89\u5168\u3067\u5FEB\u9069\u306A\u4F4F\u74B0\u5883\u306E\u6574\u5099"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15307/"
    },
    {
      id: "15342",
      region: "\u4E2D\u8D8A",
      name: "\u5F25\u5F66\u6751",
      mayorTitle: "\u672C\u9593\u82B3\u4E4B \u6751\u9577",
      scaleType: "\u6751\u30FB\u5C0F\u898F\u6A21",
      headline: "\u5F25\u5F66\u795E\u793E\u30FB\u89B3\u5149\u3068\u5B50\u80B2\u3066\u30FB\u9AD8\u9F62\u8005\u798F\u7949\u306E\u5145\u5B9F",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u5F25\u5F66\u6E29\u6CC9\u30FB\u9580\u524D\u753A\u306E\u89B3\u5149DX\u3068\u6D3B\u6027\u5316",
        "\u2461 \u6751\u72EC\u81EA\u306E\u7D66\u4ED8\u578B\u5968\u5B66\u91D1\u3068\u80B2\u5150\u652F\u63F4\u5236\u5EA6",
        "\u2462 \u9AD8\u9F62\u8005\u306E\u5B89\u5FC3\u306A\u66AE\u3089\u3057\u3068\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D0\u30B9"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15342/"
    },
    {
      id: "15361",
      region: "\u4E2D\u8D8A",
      name: "\u7530\u4E0A\u753A",
      mayorTitle: "\u4F50\u91CE\u6052\u96C4 \u753A\u9577",
      scaleType: "\u753A\u30FB\u5C0F\u898F\u6A21",
      headline: "\u6E6F\u7530\u4E0A\u6E29\u6CC9\u30FB\u7AF9\u6797\u3068\u5730\u57DF\u533B\u7642\u30FB\u798F\u7949\u306E\u78BA\u4FDD",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u7523\u696D\u30FB\u96C7\u7528"],
      details: [
        "\u2460 \u6E29\u6CC9\u30FB\u89B3\u5149\u8CC7\u6E90\u306E\u518D\u751F\u3068\u79FB\u4F4F\u30FB\u5B9A\u4F4F\u4FC3\u9032",
        "\u2461 \u9AD8\u9F62\u8005\u30FB\u969C\u5BB3\u8005\u798F\u7949\u3068\u5730\u57DF\u4EA4\u901A\u306E\u78BA\u4FDD",
        "\u2462 \u8FB2\u696D\u30FB\u7279\u7523\u54C1\u30CF\u30C1\u30DF\u30C4\u7B49\u306E\u632F\u8208"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15361/"
    },
    {
      id: "15385",
      region: "\u4E0B\u8D8A",
      name: "\u963F\u8CC0\u753A",
      mayorTitle: "\u795E\u7530\u4E00\u592B \u753A\u9577",
      scaleType: "\u753A\u30FB\u5C0F\u898F\u6A21",
      headline: "\u963F\u8CC0\u91CE\u5DDD\u306E\u81EA\u7136\u3068\u904E\u758E\u30FB\u533B\u7642\u5BFE\u7B56\u306E\u63A8\u9032",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u66AE\u3089\u3057\u30FB\u533B\u7642"],
      details: [
        "\u2460 \u753A\u7ACB\u75C5\u9662\u30FB\u8A3A\u7642\u6240\u306E\u4F53\u5236\u7DAD\u6301\u3068\u5F80\u8A3A\u652F\u63F4",
        "\u2461 \u82E5\u8005\u79FB\u4F4F\u8005\u3078\u306E\u4F4F\u5B85\u53D6\u5F97\u652F\u63F4\u3068\u5B50\u80B2\u3066\u5FDC\u63F4",
        "\u2462 \u6797\u696D\u30FB\u89B3\u5149\u8CC7\u6E90\u3092\u751F\u304B\u3057\u305F\u5730\u57DF\u518D\u751F"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15385/"
    },
    {
      id: "15405",
      region: "\u4E2D\u8D8A",
      name: "\u51FA\u96F2\u5D0E\u753A",
      mayorTitle: "\u4ED9\u6D77\u76F4\u6A39 \u753A\u9577",
      scaleType: "\u753A\u30FB\u5C0F\u898F\u6A21",
      headline: "\u826F\u5BDB\u306E\u91CC\u30FB\u7D19\u98A8\u8239\u3068\u8CA1\u653F\u5065\u5168\u5316\u30FB\u6559\u80B2\u6295\u8CC7",
      tags: ["\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066", "\u8CA1\u653F\u30FB\u65BD\u8A2D"],
      details: [
        "\u2460 \u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u884C\u653F\u904B\u55B6\u3068\u8CA1\u653F\u5065\u5168\u5316",
        "\u2461 \u5C0F\u4E2D\u4E00\u8CAB\u6559\u80B2\u306E\u63A8\u9032\u3068\u5B50\u80B2\u3066\u533B\u7642\u8CBB\u7121\u511F\u5316",
        "\u2462 \u59BB\u5165\u308A\u8857\u4E26\u307F\u306E\u4FDD\u5B58\u3068\u89B3\u5149\u5275\u51FA"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15405/"
    },
    {
      id: "15461",
      region: "\u4E2D\u8D8A",
      name: "\u6E6F\u6CA2\u753A",
      mayorTitle: "\u7530\u6751\u6B63\u5E78 \u753A\u9577",
      scaleType: "\u753A\u30FB\u5C0F\u898F\u6A21",
      headline: "\u82D7\u5834\u30FB\u30EA\u30BE\u30FC\u30C8\u90FD\u5E02\u632F\u8208\u3068\u753A\u6C11\u5B50\u80B2\u3066\u652F\u63F4",
      tags: ["\u7523\u696D\u30FB\u96C7\u7528", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u30EA\u30BE\u30FC\u30C8\u30DE\u30F3\u30B7\u30E7\u30F3\u306E\u9069\u6B63\u7BA1\u7406\u3068\u901A\u5E74\u89B3\u5149\u632F\u8208",
        "\u2461 \u753A\u5185\u5150\u7AE5\u3078\u306E\u624B\u539A\u3044\u6559\u80B2\u30FB\u5B50\u80B2\u3066\u88DC\u52A9\u91D1",
        "\u2462 \u56FD\u969B\u7684\u30B9\u30AD\u30FC\u30EA\u30BE\u30FC\u30C8\u3068\u3057\u3066\u306E\u30A4\u30F3\u30D5\u30E9\u6574\u5099"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15461/"
    },
    {
      id: "15482",
      region: "\u4E2D\u8D8A",
      name: "\u6D25\u5357\u753A",
      mayorTitle: "\u6851\u539F\u60A0 \u753A\u9577",
      scaleType: "\u753A\u30FB\u5C0F\u898F\u6A21",
      headline: "\u6CB3\u5CB8\u6BB5\u4E18\u30FB\u96EA\u56FD\u533B\u7642\u3068\u82E5\u3044\u4E16\u4EE3\u306E\u307E\u3061\u3065\u304F\u308A",
      tags: ["\u66AE\u3089\u3057\u30FB\u533B\u7642", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u82E5\u3044\u4E16\u4EE3\u306E\u753A\u653F\u53C2\u52A0\u3068\u5B50\u80B2\u3066\u30FB\u6559\u80B2\u6295\u8CC7",
        "\u2461 \u56FD\u4FDD\u75C5\u9662\u306E\u7DAD\u6301\u3068\u8C6A\u96EA\u9664\u96EA\u5BFE\u7B56\u306E\u5F37\u5316",
        "\u2462 \u6D25\u5357\u3072\u307E\u308F\u308A\u5E83\u5834\u7B49\u306E\u89B3\u5149\u30D6\u30E9\u30F3\u30C7\u30A3\u30F3\u30B0"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15482/"
    },
    {
      id: "15504",
      region: "\u4E2D\u8D8A",
      name: "\u5208\u7FBD\u6751",
      mayorTitle: "\u54C1\u7530\u5B8F\u4E00 \u6751\u9577",
      scaleType: "\u6751\u30FB\u5C0F\u898F\u6A21",
      headline: "\u30A8\u30CD\u30EB\u30AE\u30FC\u7523\u696D\u6D3B\u7528\u3068\u6751\u72EC\u81EA\u798F\u7949\u30FB\u884C\u653FDX",
      tags: ["\u7523\u696D\u30FB\u96C7\u7528", "\u884C\u653F\u30FBDX"],
      details: [
        "\u2460 \u6751\u72EC\u81EA\u306E\u7D66\u4ED8\u91D1\u30FB\u624B\u539A\u3044\u798F\u7949\u30B5\u30FC\u30D3\u30B9\u306E\u7DAD\u6301",
        "\u2461 \u30B9\u30DE\u30FC\u30C8\u8FB2\u696D\u3068\u30C7\u30B8\u30BF\u30EB\u6751\u5F79\u5834\u306E\u63A8\u9032",
        "\u2462 \u9632\u707D\u4F53\u5236\u306E\u5F37\u5316\u3068\u6751\u5185\u30A4\u30F3\u30D5\u30E9\u6574\u5099"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15504/"
    },
    {
      id: "15581",
      region: "\u4E0B\u8D8A",
      name: "\u95A2\u5DDD\u6751",
      mayorTitle: "\u52A0\u85E4\u5F18 \u6751\u9577",
      scaleType: "\u6751\u30FB\u5C0F\u898F\u6A21",
      headline: "\u9632\u707D\u30A4\u30F3\u30D5\u30E9\u518D\u5EFA\u3068\u5B89\u5168\u5B89\u5FC3\u306A\u6751\u3065\u304F\u308A",
      tags: ["\u9632\u707D\u30FB\u5B89\u5168", "\u4EBA\u53E3\u30FB\u5B50\u80B2\u3066"],
      details: [
        "\u2460 \u6CB3\u5DDD\u6539\u4FEE\u30FB\u9632\u707D\u30A4\u30F3\u30D5\u30E9\u306E\u65E9\u671F\u5B8C\u6210",
        "\u2461 \u5168\u5150\u7AE5\u3078\u306E\u5B66\u7FD2\u652F\u63F4\u3068\u6751\u5185\u96C7\u7528\u5275\u51FA",
        "\u2462 \u9AD8\u9F62\u8005\u898B\u5B88\u308A\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u5F37\u5316"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15581/"
    },
    {
      id: "15586",
      region: "\u4E0B\u8D8A",
      name: "\u7C9F\u5CF6\u6D66\u6751",
      mayorTitle: "\u8107\u5DDD\u5584\u4EAE \u6751\u9577",
      scaleType: "\u6751\u30FB\u5C0F\u898F\u6A21",
      headline: "\u96E2\u5CF6\u632F\u8208\u30FB\u5929\u7136\u6F01\u696D\u3068\u30AA\u30F3\u30E9\u30A4\u30F3\u533B\u7642\u30FB\u6559\u80B2",
      tags: ["\u884C\u653F\u30FBDX", "\u66AE\u3089\u3057\u30FB\u533B\u7642"],
      details: [
        "\u2460 \u96E2\u5CF6\u306E\u30AA\u30F3\u30E9\u30A4\u30F3\u8A3A\u7642\u30FB\u9060\u9694\u6559\u80B2\u306E\u63A8\u9032",
        "\u2461 \u5CF6\u5185\u5B9A\u671F\u822A\u8DEF\u306E\u7DAD\u6301\u3068\u6C34\u7523\u696D\u30FB\u89B3\u5149\u6D3B\u6027\u5316",
        "\u2462 \u79FB\u4F4F\u5B9A\u4F4F\u652F\u63F4\u3068\u5CF6\u5185\u5B50\u80B2\u3066\u5FDC\u63F4"
      ],
      officialUrl: "https://koyaku.47story.jp/city/15586/"
    }
  ];

  // src/state.ts
  function freshScores() {
    const s = {};
    TAGS.forEach((t) => s[t] = 0);
    return s;
  }
  var state = {
    tab: "top",
    // 最初に開いた時は必ずこのトップ画面
    electionDate: "2026-10-25",
    quizStep: 0,
    scores: freshScores(),
    quizFinished: false,
    selectedRegion: "\u3059\u3079\u3066",
    selectedMunicipality: "\u3059\u3079\u3066",
    placeSearchQuery: "",
    selectedElectionYear: "\u3059\u3079\u3066"
  };
  function daysUntil(dateStr) {
    const target = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
    const now = /* @__PURE__ */ new Date();
    now.setHours(0, 0, 0, 0);
    return Math.ceil((target.getTime() - now.getTime()) / (1e3 * 60 * 60 * 24));
  }
  function dateLabel(dateStr) {
    const d = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
    if (isNaN(d.getTime())) return "";
    const weekday = ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"][d.getDay()];
    return `${d.getFullYear()}\u5E74${d.getMonth() + 1}\u6708${d.getDate()}\u65E5(${weekday})`;
  }
  function topTag(scores) {
    return TAGS.reduce((best, t) => scores[t] > scores[best] ? t : best, TAGS[0]);
  }
  function matchedCandidate(scores) {
    let best = CANDIDATES[0];
    let bestScore = -Infinity;
    for (const c of CANDIDATES) {
      let dot = 0;
      TAGS.forEach((t) => dot += (scores[t] || 0) * (c.weights[t] || 0));
      if (dot > bestScore) {
        bestScore = dot;
        best = c;
      }
    }
    return best;
  }
  function elJpDateToIso(day) {
    const match = day.match(/(\d+)月(\d+)日/);
    if (!match) return state.electionDate;
    const [, m, d] = match;
    return `2026-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  function icon(name, size = 16) {
    const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
    switch (name) {
      case "home":
        return `<svg ${common}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
      case "calendar":
        return `<svg ${common}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`;
      case "clipboard":
        return `<svg ${common}><rect x="6" y="4" width="12" height="16" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6"/></svg>`;
      case "vote":
        return `<svg ${common}><path d="M12 3l8 4v2H4V7l8-4z"/><path d="M4 10v9h16v-9M9 14l2 2 4-4"/></svg>`;
      case "map-pin":
        return `<svg ${common}><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`;
      case "chevron-right":
        return `<svg ${common}><path d="M9 6l6 6-6 6"/></svg>`;
      case "rotate-ccw":
        return `<svg ${common}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>`;
      case "external-link":
        return `<svg ${common}><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>`;
      case "search":
        return `<svg ${common}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
      case "x":
        return `<svg ${common}><path d="M18 6 6 18M6 6l12 12"/></svg>`;
      case "info":
        return `<svg ${common}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`;
      default:
        return "";
    }
  }

  // src/views/Header.ts
  function renderHeader(renderFn) {
    const header = document.createElement("header");
    header.className = "site-header";
    const container = document.createElement("div");
    container.className = "header-container";
    const logoBox = document.createElement("div");
    logoBox.className = "logo-box";
    const logoImg = document.createElement("img");
    logoImg.src = "rogo.png";
    logoImg.alt = "\u65B0\u6F5F\u306E\u65B0\u6F5F\u9078\u6319";
    logoImg.className = "site-logo-img";
    logoImg.addEventListener("click", () => {
      state.tab = "top";
      renderFn();
    });
    logoBox.appendChild(logoImg);
    container.appendChild(logoBox);
    const navTabs = document.createElement("nav");
    navTabs.className = "nav-tabs-container";
    const tabDefs = [
      ["top", "\u30DB\u30FC\u30E0", "home"],
      ["schedule", "\u65E5\u7A0B", "calendar"],
      ["pledges", "\u516C\u7D04", "clipboard"],
      ["quiz", "\u6295\u7968\u8A3A\u65AD", "vote"],
      ["place", "\u6295\u7968\u6240", "map-pin"]
    ];
    tabDefs.forEach(([key, label, iconName]) => {
      const btn = document.createElement("button");
      btn.className = "nav-tab-item" + (state.tab === key ? " active" : "");
      btn.innerHTML = `${icon(iconName, 16)}<span>${label}</span>`;
      btn.addEventListener("click", () => {
        state.tab = key;
        renderFn();
      });
      navTabs.appendChild(btn);
    });
    container.appendChild(navTabs);
    header.appendChild(container);
    return header;
  }

  // src/views/HomeView.ts
  function renderTopLandingPage() {
    const wrap = document.createElement("div");
    const hero = document.createElement("div");
    hero.className = "main-hero-container";
    const bgPhoto = document.createElement("div");
    bgPhoto.className = "hero-bg-photo";
    bgPhoto.style.backgroundImage = "url('R.jpe')";
    hero.appendChild(bgPhoto);
    const heroOverlay = document.createElement("div");
    heroOverlay.className = "hero-overlay-mask";
    const ovalBanner = document.createElement("div");
    ovalBanner.className = "hero-oval-text";
    ovalBanner.textContent = "\u65B0\u6F5F\u306E\u82E5\u8005\u306E\u9078\u6319\u7387\u3092\u9AD8\u3081\u308B\u305F\u3081\u306E\u30B5\u30A4\u30C8";
    heroOverlay.appendChild(ovalBanner);
    const mascotLeftCard = document.createElement("div");
    mascotLeftCard.className = "hero-mascot-left";
    const senkyoImg = document.createElement("img");
    senkyoImg.src = "\u9078\u6319\u541B.png";
    senkyoImg.alt = "\u9078\u6319\u541B";
    mascotLeftCard.appendChild(senkyoImg);
    heroOverlay.appendChild(mascotLeftCard);
    const komeLeftCard = document.createElement("div");
    komeLeftCard.className = "hero-mascot-kome-left";
    const komeLeftImg = document.createElement("img");
    komeLeftImg.src = "\u3053\u3081.png";
    komeLeftImg.alt = "\u3053\u3081\u3061\u3083\u3093";
    komeLeftCard.appendChild(komeLeftImg);
    heroOverlay.appendChild(komeLeftCard);
    const komeRightCard = document.createElement("div");
    komeRightCard.className = "hero-mascot-kome-right";
    const komeRightImg = document.createElement("img");
    komeRightImg.src = "\u3053\u3081.png";
    komeRightImg.alt = "\u3053\u3081\u3061\u3083\u3093";
    komeRightCard.appendChild(komeRightImg);
    heroOverlay.appendChild(komeRightCard);
    hero.appendChild(heroOverlay);
    const scrollIndicator = document.createElement("div");
    scrollIndicator.className = "scroll-indicator";
    scrollIndicator.innerHTML = `<span>\u25BC \u4E0B\u3078\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u7D50\u679C\u3092\u898B\u308B</span>`;
    hero.appendChild(scrollIndicator);
    wrap.appendChild(hero);
    const surveySection = document.createElement("section");
    surveySection.className = "survey-section";
    surveySection.style.marginTop = "40px";
    const surveyTitle = document.createElement("h2");
    surveyTitle.className = "disp section-title";
    surveyTitle.textContent = "\u{1F4CA} \u65B0\u6F5F\u770C \u82E5\u8005\u306E\u6295\u7968\u610F\u8B58\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u7D50\u679C";
    surveySection.appendChild(surveyTitle);
    const surveySub = document.createElement("p");
    surveySub.className = "section-sub";
    surveySub.textContent = "\u770C\u5185\u306E\u82E5\u8005\u4E16\u4EE3\uFF0874\u540D\u56DE\u7B54\uFF09\u3092\u5BFE\u8C61\u306B\u5B9F\u65BD\u3057\u305F\u6295\u7968\u53C2\u52A0\u72B6\u6CC1\u304A\u3088\u3073\u671F\u65E5\u524D\u6295\u7968\u306E\u8ABF\u67FB\u30C7\u30FC\u30BF\u3067\u3059\u3002";
    surveySection.appendChild(surveySub);
    const surveyGrid = document.createElement("div");
    surveyGrid.className = "survey-grid";
    const card1 = document.createElement("div");
    card1.className = "card survey-card";
    card1.innerHTML = `
    <div class="survey-card-header">
      <span class="survey-tag">\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u7D50\u679C \u2460</span>
      <h3 class="survey-question-title">\u4EE4\u548C8\u5E745\u670831\u65E5 \u65B0\u6F5F\u770C\u77E5\u4E8B\u9078\u6319\u306B\u884C\u304D\u307E\u3057\u305F\u304B\uFF1F</h3>
      <span class="survey-count-badge">\u56DE\u7B54\u6570: 74\u4EF6</span>
    </div>
    <div class="survey-img-container">
      <img src="\u7D50\u679C.png" alt="\u65B0\u6F5F\u770C\u77E5\u4E8B\u9078\u6319 \u6295\u7968\u7387\u30A2\u30F3\u30B1\u30FC\u30C8\u7D50\u679C" class="survey-chart-img">
    </div>
    <div class="survey-stats-row">
      <div class="stat-pill stat-blue">
        <span class="stat-label">\u884C\u3063\u305F</span>
        <span class="stat-value">50.0%</span>
        <span class="stat-sub">37\u540D</span>
      </div>
      <div class="stat-pill stat-red">
        <span class="stat-label">\u884C\u3063\u3066\u306A\u3044</span>
        <span class="stat-value">50.0%</span>
        <span class="stat-sub">37\u540D</span>
      </div>
    </div>
    <div class="survey-text-box">
      <p>\u300C\u534A\u6570\u306E\u82E5\u3044\u4EBA\u304C\u6295\u7968\u306B\u53C2\u52A0\uFF01\u6B8B\u308A\u306E50%\u306E\u4EBA\u305F\u3061\u3082\u3001\u81EA\u5206\u305F\u3061\u306E\u58F0\u3084\u9858\u3044\u3092\u793E\u4F1A\u306B\u5C4A\u3051\u308B\u305F\u3081\u306B\u4E00\u7968\u3092\u6295\u3058\u3088\u3046\uFF01\u300D</p>
    </div>
  `;
    surveyGrid.appendChild(card1);
    const card2 = document.createElement("div");
    card2.className = "card survey-card";
    card2.innerHTML = `
    <div class="survey-card-header">
      <span class="survey-tag">\u30A2\u30F3\u30B1\u30FC\u30C8\u8ABF\u67FB\u7D50\u679C \u2461</span>
      <h3 class="survey-question-title">\u9078\u6319\u306B\u884C\u3063\u305F\u4EBA\u306B\u8CEA\u554F\u3067\u3059\u3002\uFF08\u5F53\u65E5\u306E\u6295\u7968 vs \u671F\u65E5\u524D\u6295\u7968\uFF09</h3>
      <span class="survey-count-badge">\u56DE\u7B54\u6570: 37\u4EF6</span>
    </div>
    <div class="survey-img-container">
      <img src="\u671F\u65E5\u524D\u6295\u7968.png" alt="\u671F\u65E5\u524D\u6295\u7968 \u5229\u7528\u5272\u5408\u30A2\u30F3\u30B1\u30FC\u30C8\u7D50\u679C" class="survey-chart-img">
    </div>
    <div class="survey-stats-row">
      <div class="stat-pill stat-blue">
        <span class="stat-label">\u9078\u6319\u65E5\u5F53\u65E5\u306B\u3044\u3063\u305F</span>
        <span class="stat-value">54.1%</span>
        <span class="stat-sub">20\u540D</span>
      </div>
      <div class="stat-pill stat-red">
        <span class="stat-label">\u671F\u65E5\u524D\u6295\u7968\u306B\u3044\u3063\u305F</span>
        <span class="stat-value">45.9%</span>
        <span class="stat-sub">17\u540D</span>
      </div>
    </div>
    <div class="survey-text-box">
      <p>\u300C\u6295\u7968\u306B\u884C\u3063\u305F\u4EBA\u306E\u3046\u3061\u534A\u6570\u8FD1\u304F\u304C\u300E\u671F\u65E5\u524D\u6295\u7968\u300F\u3092\u6D3B\u7528\uFF01\u5F53\u65E5\u90FD\u5408\u304C\u60AA\u304F\u3066\u3082\u3001\u4E8B\u524D\u306B\u6295\u7968\u306B\u884C\u3053\u3046\uFF01\u300D</p>
    </div>
  `;
    surveyGrid.appendChild(card2);
    surveySection.appendChild(surveyGrid);
    wrap.appendChild(surveySection);
    return wrap;
  }

  // src/data/elections.ts
  var OFFICIAL_SCHEDULE_URL = "https://www.pref.niigata.lg.jp/site/senkyo/list803.html";
  var UPCOMING_ELECTIONS = [
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u80CE\u5185\u5E02\u9577\u9078\u6319", notice: "9\u67086\u65E5", day: "9\u670813\u65E5", isoDate: "2026-09-13" },
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u65B0\u6F5F\u5E02\u9577\u9078\u6319", notice: "10\u670811\u65E5", day: "10\u670825\u65E5", isoDate: "2026-10-25" },
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u71D5\u5E02\u8B70\u4F1A\u8B70\u54E1\u9078\u6319", notice: "10\u670811\u65E5", day: "10\u670818\u65E5", isoDate: "2026-10-18" },
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u898B\u9644\u5E02\u8B70\u4F1A\u8B70\u54E1\u9078\u6319", notice: "10\u670818\u65E5", day: "10\u670825\u65E5", isoDate: "2026-10-25" },
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u5999\u9AD8\u5E02\u9577\u9078\u6319", notice: "11\u67088\u65E5", day: "11\u670815\u65E5", isoDate: "2026-11-15" },
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u5C0F\u5343\u8C37\u5E02\u9577\u9078\u6319", notice: "11\u67088\u65E5", day: "11\u670815\u65E5", isoDate: "2026-11-15" },
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u65B0\u767A\u7530\u5E02\u9577\u9078\u6319", notice: "11\u670815\u65E5", day: "11\u670822\u65E5", isoDate: "2026-11-22" },
    { year: "\u4EE4\u548C8\u5E74\u5EA6", yearLabel: "\u4EE4\u548C8\u5E74", name: "\u963F\u8CC0\u753A\u9577\u9078\u6319", notice: "11\u670817\u65E5", day: "11\u670822\u65E5", isoDate: "2026-11-22" },
    { year: "\u4EE4\u548C9\u5E74\u5EA6\u4EE5\u964D", yearLabel: "\u4EE4\u548C9\u5E74", name: "\u7B2C21\u56DE \u7D71\u4E00\u5730\u65B9\u9078\u6319 (\u65B0\u6F5F\u770C\u8B70\u4F1A\u8B70\u54E1\u9078\u6319)", notice: "3\u6708\u4E0B\u65EC", day: "4\u670811\u65E5(\u4E88\u5B9A)", isoDate: "2027-04-11" },
    { year: "\u4EE4\u548C9\u5E74\u5EA6\u4EE5\u964D", yearLabel: "\u4EE4\u548C9\u5E74", name: "\u65B0\u6F5F\u5E02\u8B70\u4F1A\u8B70\u54E1\u4E00\u822C\u9078\u6319", notice: "3\u6708\u4E0B\u65EC", day: "4\u670811\u65E5(\u4E88\u5B9A)", isoDate: "2027-04-11" },
    { year: "\u4EE4\u548C9\u5E74\u5EA6\u4EE5\u964D", yearLabel: "\u4EE4\u548C9\u5E74", name: "\u9577\u5CA1\u5E02\u9577\u9078\u6319 (\u4EFB\u671F\u6E80\u4E86 10\u6708)", notice: "10\u6708", day: "10\u6708\u4E0B\u65EC(\u4E88\u5B9A)", isoDate: "2027-10-24" },
    { year: "\u4EE4\u548C9\u5E74\u5EA6\u4EE5\u964D", yearLabel: "\u4EE4\u548C9\u5E74", name: "\u4E0A\u8D8A\u5E02\u9577\u9078\u6319 (\u4EFB\u671F\u6E80\u4E86 11\u6708)", notice: "11\u6708", day: "11\u6708\u4E0B\u65EC(\u4E88\u5B9A)", isoDate: "2027-11-21" }
  ];
  var ELECTION_YEAR_FILTERS = ["\u3059\u3079\u3066", "\u4EE4\u548C8\u5E74\u5EA6", "\u4EE4\u548C9\u5E74\u5EA6\u4EE5\u964D"];

  // src/views/ScheduleView.ts
  function renderSchedulePage(renderFn) {
    const wrap = document.createElement("div");
    const title = document.createElement("h2");
    title.className = "disp section-title";
    title.textContent = "\u9078\u6319\u65E5\u7A0B \uFF06 \u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3";
    wrap.appendChild(title);
    const days = daysUntil(state.electionDate);
    const heroRow = document.createElement("div");
    heroRow.className = "hero-row";
    heroRow.innerHTML = `
    <span class="disp hero-num">${days >= 0 ? days : "\u2015"}</span>
    <span class="hero-suffix">${days >= 0 ? "\u65E5\u5F8C\u304C\u9078\u629E\u3057\u305F\u6295\u7968\u65E5" : "\u6295\u7968\u65E5\u3092\u904E\u304E\u3066\u3044\u307E\u3059"}</span>
  `;
    wrap.appendChild(heroRow);
    const sub = document.createElement("p");
    sub.className = "subtext";
    sub.textContent = `${dateLabel(state.electionDate)} \u6295\u7968\u65E5 (\u30EA\u30B9\u30C8\u3092\u30BF\u30C3\u30D7\u3067\u65E5\u4ED8\u5909\u66F4)`;
    wrap.appendChild(sub);
    const dateCard = document.createElement("div");
    dateCard.className = "card";
    const dateLabelEl = document.createElement("label");
    dateLabelEl.className = "card-label";
    dateLabelEl.textContent = "\u6295\u7968\u65E5\u3092\u624B\u52D5\u8A2D\u5B9A\u3059\u308B";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.className = "date-input";
    dateInput.value = state.electionDate;
    dateInput.addEventListener("change", (e) => {
      state.electionDate = e.target.value;
      renderFn();
    });
    dateCard.appendChild(dateLabelEl);
    dateCard.appendChild(dateInput);
    wrap.appendChild(dateCard);
    const scheduleCard = document.createElement("div");
    scheduleCard.className = "card";
    const scheduleHead = document.createElement("div");
    scheduleHead.style.display = "flex";
    scheduleHead.style.justifyContent = "space-between";
    scheduleHead.style.alignItems = "center";
    scheduleHead.style.marginBottom = "12px";
    scheduleHead.innerHTML = `
    <p style="font-size:15px;font-weight:700;margin:0;">\u65B0\u6F5F\u770C\u5185\u306E\u4E88\u5B9A\u9078\u6319\uFF08\u5E74\u5EA6\u5225\uFF09</p>
    <span style="font-size:12px;color:var(--faint);">\u4EE4\u548C8\u301C9\u5E74\u4EE5\u964D</span>
  `;
    scheduleCard.appendChild(scheduleHead);
    const yearChips = document.createElement("div");
    yearChips.className = "year-chips";
    yearChips.style.display = "flex";
    yearChips.style.gap = "6px";
    yearChips.style.flexWrap = "wrap";
    yearChips.style.marginBottom = "14px";
    ELECTION_YEAR_FILTERS.forEach((y) => {
      const btn = document.createElement("button");
      btn.className = "year-chip" + (state.selectedElectionYear === y ? " active" : "");
      btn.textContent = y;
      btn.addEventListener("click", () => {
        state.selectedElectionYear = y;
        renderFn();
      });
      yearChips.appendChild(btn);
    });
    scheduleCard.appendChild(yearChips);
    const filteredElections = UPCOMING_ELECTIONS.filter((e) => {
      if (state.selectedElectionYear === "\u3059\u3079\u3066") return true;
      return e.year === state.selectedElectionYear;
    });
    filteredElections.forEach((e) => {
      const btn = document.createElement("button");
      btn.className = "election-btn";
      btn.innerHTML = `
      <div style="display:flex;align-items:center;gap:6px;">
        <span class="year-badge">${e.yearLabel}</span>
        <span style="font-weight:500;">${e.name}</span>
      </div>
      <span style="font-size:13px;color:var(--muted);">\u6295\u7968\u65E5 ${e.day} (\u544A\u793A ${e.notice})</span>
    `;
      btn.addEventListener("click", () => {
        state.electionDate = e.isoDate || elJpDateToIso(e.day);
        renderFn();
      });
      scheduleCard.appendChild(btn);
    });
    const officialLink = document.createElement("a");
    officialLink.className = "official-link";
    officialLink.href = OFFICIAL_SCHEDULE_URL;
    officialLink.target = "_blank";
    officialLink.rel = "noopener noreferrer";
    officialLink.innerHTML = `\u65B0\u6F5F\u770C\u9078\u6319\u7BA1\u7406\u59D4\u54E1\u4F1A\u300C\u770C\u5185\u9078\u6319\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u300D\u3092\u898B\u308B ${icon(
      "external-link",
      13
    )}`;
    scheduleCard.appendChild(officialLink);
    wrap.appendChild(scheduleCard);
    const infoRows = [
      {
        label: "\u6295\u7968\u6642\u9593",
        value: "7:00 \uFF5E 20:00",
        note: "\u203B\u4E00\u90E8\u306E\u6295\u7968\u6240\u3067\u306F\u6642\u9593\u304C\u7570\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"
      },
      {
        label: "\u671F\u65E5\u524D\u6295\u7968",
        value: "\u6295\u7968\u65E5\u306E\u524D\u65E5\u307E\u3067\u3001\u5404\u5E02\u533A\u753A\u6751\u304C\u6307\u5B9A\u3059\u308B\u671F\u65E5\u524D\u6295\u7968\u6240\u3067\u6295\u7968\u3067\u304D\u307E\u3059\u3002"
      },
      {
        label: "\u6301\u3061\u7269",
        value: "\u6295\u7968\u6240\u5165\u5834\u5238\uFF08\u672C\u4EBA\u78BA\u8A8D\u304C\u3067\u304D\u308C\u3070\u6295\u7968\u3067\u304D\u307E\u3059\uFF09"
      }
    ];
    infoRows.forEach(({ label, value, note }, idx) => {
      const row = document.createElement("div");
      row.className = "info-row";
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.style.alignItems = "flex-start";
      row.style.gap = "16px";
      row.style.padding = "14px 0";
      const valueStyle = idx === 0 ? "font-size: 22px; font-weight: 800; color: #7C3AED; letter-spacing: 0.5px; line-height: 1.2;" : "font-size: 14.5px; font-weight: 700; color: #7C3AED; line-height: 1.5;";
      row.innerHTML = `
      <span class="label" style="flex-shrink:0;font-weight:700;padding-top:2px;">${label}</span>
      <div style="text-align:right;">
        <div style="${valueStyle}">${value}</div>
        ${note ? `<div style="font-size:12px;color:var(--muted);margin-top:4px;">${note}</div>` : ""}
      </div>
    `;
      wrap.appendChild(row);
    });
    const footnote = document.createElement("p");
    footnote.className = "footnote";
    footnote.textContent = "\u203B\u4E0A\u8A18\u306E\u9078\u6319\u4E00\u89A7\u306F\u65B0\u6F5F\u770C\u9078\u6319\u7BA1\u7406\u59D4\u54E1\u4F1A\u306E\u516C\u8868\u60C5\u5831\u3092\u3082\u3068\u306B\u3057\u305F\u629C\u7C8B\u3067\u3001\u81EA\u52D5\u66F4\u65B0\u306F\u3055\u308C\u307E\u305B\u3093\u3002\u6700\u65B0\u306E\u6295\u7968\u65E5\u30FB\u6295\u7968\u6240\u306F\u5FC5\u305A\u516C\u5F0F\u30B5\u30A4\u30C8\u3067\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002";
    wrap.appendChild(footnote);
    return wrap;
  }

  // src/views/PledgesView.ts
  var pledgeViewMode = "theme";
  var pledgeSearchQuery = "";
  var selectedPledgeRegion = "\u3059\u3079\u3066";
  function renderPledges() {
    const wrap = document.createElement("div");
    const title = document.createElement("h2");
    title.className = "disp section-title";
    title.textContent = "\u516C\u7D04\u3092\u308F\u304B\u308A\u3084\u3059\u304F \uFF06 \u65B0\u6F5F\u770C30\u5E02\u753A\u6751 \u516C\u7D04\u691C\u7D22";
    wrap.appendChild(title);
    const sub = document.createElement("p");
    sub.className = "section-sub";
    sub.textContent = "\u4E3B\u8981\u306A\u653F\u7B56\u30B0\u30EB\u30FC\u30D7\u306E\u8981\u7D04\u3001\u307E\u305F\u306F\u304A\u4F4F\u307E\u3044\u306E\u5E02\u753A\u6751\uFF08\u516830\u5E02\u753A\u6751\uFF09\u306E\u9996\u9577\u516C\u7D04\u3092\u691C\u7D22\u30FB\u6BD4\u8F03\u3067\u304D\u307E\u3059\u3002";
    wrap.appendChild(sub);
    const modeSwitch = document.createElement("div");
    modeSwitch.style.display = "flex";
    modeSwitch.style.gap = "8px";
    modeSwitch.style.marginBottom = "20px";
    const btnTheme = document.createElement("button");
    btnTheme.className = "year-chip" + (pledgeViewMode === "theme" ? " active" : "");
    btnTheme.innerHTML = `<span>\u{1F4A1} \u4E3B\u8981\u653F\u7B56\u30C6\u30FC\u30DE\u3067\u6BD4\u8F03</span>`;
    btnTheme.addEventListener("click", () => {
      pledgeViewMode = "theme";
      renderPledgesContent();
    });
    const btnMuni = document.createElement("button");
    btnMuni.className = "year-chip" + (pledgeViewMode === "municipality" ? " active" : "");
    btnMuni.innerHTML = `<span>\u{1F3DB}\uFE0F \u65B0\u6F5F\u770C \u516830\u5E02\u753A\u6751 \u516C\u7D04\u691C\u7D22</span>`;
    btnMuni.addEventListener("click", () => {
      pledgeViewMode = "municipality";
      renderPledgesContent();
    });
    modeSwitch.appendChild(btnTheme);
    modeSwitch.appendChild(btnMuni);
    wrap.appendChild(modeSwitch);
    const dynamicContent = document.createElement("div");
    dynamicContent.className = "pledges-dynamic-content";
    wrap.appendChild(dynamicContent);
    function renderPledgesContent() {
      dynamicContent.innerHTML = "";
      if (pledgeViewMode === "theme") {
        btnTheme.className = "year-chip active";
        btnMuni.className = "year-chip";
        CANDIDATES.forEach((c) => {
          const card = document.createElement("div");
          card.className = "card candidate-card";
          const name = document.createElement("h3");
          name.className = "disp candidate-name";
          name.textContent = c.name;
          card.appendChild(name);
          const tagline = document.createElement("p");
          tagline.className = "candidate-tagline";
          tagline.textContent = c.tagline;
          card.appendChild(tagline);
          const list = document.createElement("ul");
          list.className = "pledge-list";
          c.pledges.forEach((p) => {
            const li = document.createElement("li");
            li.textContent = p;
            list.appendChild(li);
          });
          card.appendChild(list);
          const chips = document.createElement("div");
          TAGS.filter((t) => c.weights[t] > 0).forEach((t) => {
            const meta = TAG_META[t];
            const chip = document.createElement("span");
            chip.className = "tag-chip";
            chip.style.backgroundColor = meta.color + "1A";
            chip.style.color = meta.color;
            chip.style.border = `1px solid ${meta.color}55`;
            chip.textContent = meta.label;
            chips.appendChild(chip);
          });
          card.appendChild(chips);
          dynamicContent.appendChild(card);
        });
      } else {
        let updatePledgeList = function() {
          pledgeListContainer.innerHTML = "";
          const q = pledgeSearchQuery.trim().toLowerCase();
          const filtered = MUNICIPAL_PLEDGES.filter((m) => {
            if (selectedPledgeRegion !== "\u3059\u3079\u3066" && m.region !== selectedPledgeRegion) {
              return false;
            }
            if (q) {
              const target = `${m.name} ${m.mayorTitle} ${m.headline} ${m.tags.join(" ")} ${m.details.join(" ")}`.toLowerCase();
              return target.includes(q);
            }
            return true;
          });
          countBadge.textContent = q ? `\u{1F50D} \u691C\u7D22\u7D50\u679C: ${filtered.length}\u4EF6\u306E\u81EA\u6CBB\u4F53\u516C\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F` : `\u{1F4CD} \u300C${selectedPledgeRegion}\u300D: \u5168${filtered.length}\u81EA\u6CBB\u4F53\u306E\u516C\u7D04\u3092\u8868\u793A\u4E2D`;
          filtered.forEach((m) => {
            const card = document.createElement("div");
            card.className = "card polling-card";
            card.style.marginBottom = "14px";
            const head = document.createElement("div");
            head.className = "polling-card-head";
            head.innerHTML = `
            <div class="head-tags">
              <span class="region-badge-tag">${m.region}</span>
              <span class="ward-tag">${m.scaleType}</span>
            </div>
            <span style="font-size:12px;color:var(--faint);">\u51FA\u5178: \u5E02\u9577\u30FB\u753A\u9577\u30FB\u6751\u9577 \u516C\u7D04\u30DE\u30C3\u30D7</span>
          `;
            card.appendChild(head);
            const nameEl = document.createElement("h3");
            nameEl.className = "polling-name";
            nameEl.innerHTML = `${m.name} <span style="font-size:14px;color:#7C3AED;font-weight:600;">\uFF08${m.mayorTitle}\uFF09</span>`;
            card.appendChild(nameEl);
            const headlineEl = document.createElement("p");
            headlineEl.style.fontSize = "14.5px";
            headlineEl.style.fontWeight = "700";
            headlineEl.style.color = "#0F172A";
            headlineEl.style.margin = "4px 0 10px 0";
            headlineEl.textContent = `\u300C${m.headline}\u300D`;
            card.appendChild(headlineEl);
            const detailsList = document.createElement("ul");
            detailsList.className = "pledge-list";
            detailsList.style.marginBottom = "12px";
            m.details.forEach((d) => {
              const li = document.createElement("li");
              li.textContent = d;
              detailsList.appendChild(li);
            });
            card.appendChild(detailsList);
            const chipContainer = document.createElement("div");
            chipContainer.style.display = "flex";
            chipContainer.style.gap = "6px";
            chipContainer.style.flexWrap = "wrap";
            chipContainer.style.marginBottom = "10px";
            m.tags.forEach((t) => {
              const chip = document.createElement("span");
              chip.className = "year-badge";
              chip.textContent = `# ${t}`;
              chipContainer.appendChild(chip);
            });
            card.appendChild(chipContainer);
            const linkBtn = document.createElement("a");
            linkBtn.className = "map-direct-btn";
            linkBtn.href = m.officialUrl;
            linkBtn.target = "_blank";
            linkBtn.rel = "noopener noreferrer";
            linkBtn.innerHTML = `\u516C\u7D04\u30DE\u30C3\u30D7\u3067\u300C${m.name}\u300D\u306E\u516C\u5F0F\u4E00\u6B21\u60C5\u5831\u3092\u78BA\u8A8D \u2197`;
            card.appendChild(linkBtn);
            pledgeListContainer.appendChild(card);
          });
        };
        btnTheme.className = "year-chip";
        btnMuni.className = "year-chip active";
        const regionFilterBox = document.createElement("div");
        regionFilterBox.style.display = "flex";
        regionFilterBox.style.gap = "6px";
        regionFilterBox.style.flexWrap = "wrap";
        regionFilterBox.style.marginBottom = "14px";
        ["\u3059\u3079\u3066", "\u770C\u5168\u57DF", "\u4E0B\u8D8A", "\u4E2D\u8D8A", "\u4E0A\u8D8A", "\u4F50\u6E21"].forEach((r) => {
          const chip = document.createElement("button");
          chip.className = "region-chip" + (selectedPledgeRegion === r ? " active" : "");
          chip.textContent = r;
          chip.addEventListener("click", () => {
            selectedPledgeRegion = r;
            renderPledgesContent();
          });
          regionFilterBox.appendChild(chip);
        });
        dynamicContent.appendChild(regionFilterBox);
        const searchBox = document.createElement("div");
        searchBox.className = "place-search-box";
        searchBox.style.marginBottom = "16px";
        const searchIcon = document.createElement("span");
        searchIcon.className = "search-icon";
        searchIcon.innerHTML = icon("search", 16);
        searchBox.appendChild(searchIcon);
        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.className = "place-search-input";
        searchInput.placeholder = "\u5E02\u753A\u6751\u540D\uFF08\u4F8B: \u65B0\u6F5F\u5E02\u3001\u9577\u5CA1\u5E02\u3001\u4F50\u6E21\u3001\u71D5\uFF09\u3001\u9996\u9577\u540D\u3001\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u516C\u7D04\u3092\u691C\u7D22...";
        searchInput.value = pledgeSearchQuery;
        searchInput.addEventListener("input", (e) => {
          pledgeSearchQuery = e.target.value;
          updatePledgeList();
        });
        searchBox.appendChild(searchInput);
        dynamicContent.appendChild(searchBox);
        const countBadge = document.createElement("div");
        countBadge.className = "result-count-badge";
        dynamicContent.appendChild(countBadge);
        const pledgeListContainer = document.createElement("div");
        pledgeListContainer.className = "polling-list-container";
        dynamicContent.appendChild(pledgeListContainer);
        updatePledgeList();
      }
    }
    renderPledgesContent();
    return wrap;
  }

  // src/views/QuizView.ts
  function renderQuizQuestion(renderFn) {
    const wrap = document.createElement("div");
    const q = QUESTIONS[state.quizStep];
    const head = document.createElement("div");
    head.className = "quiz-head";
    head.innerHTML = `
    <h2 class="disp section-title" style="margin:0;">\u6295\u7968\u8A3A\u65AD</h2>
    <span style="font-size:14px;color:var(--faint);">\u8CEA\u554F ${state.quizStep + 1} / ${QUESTIONS.length}</span>
  `;
    wrap.appendChild(head);
    const track = document.createElement("div");
    track.className = "progress-track";
    const fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.style.width = `${state.quizStep / QUESTIONS.length * 100}%`;
    track.appendChild(fill);
    wrap.appendChild(track);
    const question = document.createElement("p");
    question.className = "disp quiz-question";
    question.textContent = q.q;
    wrap.appendChild(question);
    const options = document.createElement("div");
    options.className = "quiz-options";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.innerHTML = `<span>${opt.text}</span>${icon("chevron-right", 16)}`;
      btn.addEventListener("click", () => {
        TAGS.forEach((t) => {
          if (opt.weights[t]) state.scores[t] += opt.weights[t];
        });
        if (state.quizStep + 1 < QUESTIONS.length) {
          state.quizStep += 1;
        } else {
          state.quizFinished = true;
        }
        renderFn();
      });
      options.appendChild(btn);
    });
    wrap.appendChild(options);
    return wrap;
  }
  function renderQuizResult(renderFn) {
    const wrap = document.createElement("div");
    const title = document.createElement("h2");
    title.className = "disp section-title";
    title.textContent = "\u8A3A\u65AD\u7D50\u679C";
    wrap.appendChild(title);
    const sub = document.createElement("p");
    sub.className = "section-sub";
    sub.textContent = "\u3042\u306A\u305F\u306E\u56DE\u7B54\u304B\u3089\u898B\u3048\u3066\u304D\u305F\u30BF\u30A4\u30D7\u3067\u3059";
    wrap.appendChild(sub);
    const top = topTag(state.scores);
    const meta = TAG_META[top];
    const resultCard = document.createElement("div");
    resultCard.className = "result-card";
    resultCard.style.border = `1px solid ${meta.color}55`;
    resultCard.innerHTML = `
    <p class="result-eyebrow">\u3042\u306A\u305F\u306F</p>
    <p class="disp result-type" style="color:${meta.color};">${TYPE_NAMES[top]}</p>
    <p class="result-desc">\u7279\u306B\u300C${meta.label}\u300D\u3092\u91CD\u8996\u3059\u308B\u50BE\u5411\u304C\u3042\u308A\u307E\u3059</p>
  `;
    wrap.appendChild(resultCard);
    const balanceLabel = document.createElement("p");
    balanceLabel.style.fontSize = "14px";
    balanceLabel.style.color = "var(--muted)";
    balanceLabel.style.marginBottom = "12px";
    balanceLabel.textContent = "\u91CD\u8996\u30DD\u30A4\u30F3\u30C8\u306E\u30D0\u30E9\u30F3\u30B9";
    wrap.appendChild(balanceLabel);
    const maxScore = Math.max(...TAGS.map((t) => state.scores[t]), 1);
    TAGS.forEach((t) => {
      const row = document.createElement("div");
      row.className = "balance-row";
      const pct = state.scores[t] / maxScore * 100;
      row.innerHTML = `
      <span class="balance-label">${TAG_META[t].label}</span>
      <div class="balance-track"><div class="balance-fill" style="width:${pct}%;background-color:${TAG_META[t].color};"></div></div>
    `;
      wrap.appendChild(row);
    });
    const cand = matchedCandidate(state.scores);
    const matchCard = document.createElement("div");
    matchCard.className = "match-card";
    matchCard.innerHTML = `
    <p class="match-eyebrow">\u516C\u7D04\u304C\u8FD1\u3044\u5019\u88DC(\u30B5\u30F3\u30D7\u30EB)</p>
    <p class="disp match-name">${cand.name}</p>
    <p class="match-tagline">${cand.tagline}</p>
  `;
    const viewPledgeBtn = document.createElement("button");
    viewPledgeBtn.className = "match-link";
    viewPledgeBtn.textContent = "\u516C\u7D04\u306E\u8A73\u3057\u3044\u5185\u5BB9\u3092\u898B\u308B";
    viewPledgeBtn.addEventListener("click", () => {
      state.tab = "pledges";
      renderFn();
    });
    matchCard.appendChild(viewPledgeBtn);
    wrap.appendChild(matchCard);
    const resetBtn = document.createElement("button");
    resetBtn.className = "reset-btn";
    resetBtn.innerHTML = `${icon("rotate-ccw", 14)}<span>\u3082\u3046\u4E00\u5EA6\u8A3A\u65AD\u3059\u308B</span>`;
    resetBtn.addEventListener("click", () => {
      state.quizStep = 0;
      state.scores = freshScores();
      state.quizFinished = false;
      renderFn();
    });
    wrap.appendChild(resetBtn);
    const footnote = document.createElement("p");
    footnote.className = "footnote";
    footnote.textContent = "\u203B\u3053\u306E\u8A3A\u65AD\u306F\u8003\u3048\u3092\u6574\u7406\u3059\u308B\u305F\u3081\u306E\u7C21\u6613\u7684\u306A\u3082\u306E\u3067\u3059\u3002\u5B9F\u969B\u306E\u6295\u7968\u5148\u306F\u3001\u516C\u5F0F\u306E\u516C\u7D04\u3084\u653F\u7B56\u3092\u5FC5\u305A\u3054\u81EA\u8EAB\u3067\u78BA\u8A8D\u3057\u3066\u6C7A\u3081\u3066\u304F\u3060\u3055\u3044\u3002";
    wrap.appendChild(footnote);
    return wrap;
  }

  // src/data/places.ts
  var POLLING_PLACES = [
    {
      "id": "1001",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u677E\u6D5C\u5C0F\u5B66\u6821",
      "address": "\u5317\u533A\u677E\u6D5C3\u201019\u20101",
      "area": "\u677E\u6D5C1\uFF5E8\u4E01\u76EE\u3001\u677E\u6D5C\u753A\u306E\u4E00\u90E8\u3001\u677E\u6D5C\u6771\u753A1\uFF5E2\u4E01\u76EE\u3001\u677E\u6D5C\u672C\u753A1\uFF5E4\u4E01\u76EE\u3001\u677E\u6D5C\u307F\u306A\u3068",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%9D%BE%E6%B5%9C%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%9D%BE%E6%B5%9C3%E2%80%9019%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1002",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u5357\u6D5C\u9023\u7D61\u6240",
      "address": "\u5317\u533A\u5CF6\u898B\u753A2069-1",
      "area": "\u5CF6\u898B\u753A\u3001\u767D\u52E2\u753A\u3001\u65B0\u5BCC\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%8D%97%E6%B5%9C%E9%80%A3%E7%B5%A1%E6%89%80%20%E5%8C%97%E5%8C%BA%E5%B3%B6%E8%A6%8B%E7%94%BA2069-1",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1003",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u592A\u592B\u6D5C\u5C0F\u5B66\u6821",
      "address": "\u5317\u533A\u592A\u592B\u6D5C2045\u20102",
      "area": "\u795E\u8C37\u5185\u3001\u592A\u592B\u6D5C\u3001\u592A\u592B\u6D5C\u65B0\u753A1\uFF5E2\u4E01\u76EE\u3001\u677E\u6804\u753A\u3001\u677E\u6D5C\u753A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%A4%AA%E5%A4%AB%E6%B5%9C%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E5%A4%AA%E5%A4%AB%E6%B5%9C2045%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1004",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u592A\u90CE\u4EE3\u81EA\u6CBB\u4F1A\u9928",
      "address": "\u5317\u533A\u592A\u90CE\u4EE3120",
      "area": "\u592A\u90CE\u4EE3",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%A4%AA%E9%83%8E%E4%BB%A3%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E5%A4%AA%E9%83%8E%E4%BB%A3120",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1005",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u6FC1\u5DDD\u5C0F\u5B66\u6821",
      "address": "\u5317\u533A\u6FC1\u5DDD284",
      "area": "\u3059\u307F\u308C\u91CE1\uFF5E3\u4E01\u76EE\u3001\u3064\u304F\u3057\u91CE1\uFF5E2\u4E01\u76EE\u3001\u65B0\u5D0E\u3001\u65B0\u5D0E1\uFF5E3\u4E01\u76EE\u3001\u6FC1\u5DDD\u3001\u6FC1\u5DDD1\u4E01\u76EE\u3001\u677E\u6F5F",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%BF%81%E5%B7%9D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%BF%81%E5%B7%9D284",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1006",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u4E09\u8ED2\u5C4B\u753A\u81EA\u6CBB\u4F1A\u9928",
      "address": "\u5317\u533A\u4E09\u8ED2\u5C4B\u753A19\u201016",
      "area": "\u4E09\u8ED2\u5C4B\u753A\u3001\u65B0\u5143\u5CF6\u753A\u3001\u540D\u76EE\u6240\u3001\u540D\u76EE\u62401\uFF5E3\u4E01\u76EE\u3001\u897F\u540D\u76EE\u6240\u3001\u677E\u6D5C\u65B0\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E4%B8%89%E8%BB%92%E5%B1%8B%E7%94%BA%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E4%B8%89%E8%BB%92%E5%B1%8B%E7%94%BA19%E2%80%9016",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1007",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u5317\u533A\u5F79\u6240",
      "address": "\u5317\u533A\u6771\u6804\u753A1-1-14",
      "area": "\u845B\u585A\u306E\u4E00\u90E8\u3001\u592A\u7530\u306E\u4E00\u90E8\u3001\u5609\u5C71\u306E\u4E00\u90E8\u3001\u524D\u65B0\u7530\u306E\u4E00\u90E8\u3001\u6A2A\u4E95\u306E\u4E00\u90E8\u3001\u767D\u65B0\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u767D\u65B0\u753A2\uFF5E3\u4E01\u76EE\u3001\u767D\u65B0\u753A4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5609\u5C711\u4E01\u76EE\u5168\u57DF\u3001\u5609\u5C712\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5609\u5C713\uFF5E5\u4E01\u76EE\u3001\u5609\u5C716\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u6804\u753A(\u3068\u3046\u3048\u3044\u3061\u3087\u3046)1\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%8C%97%E5%8C%BA%E5%BD%B9%E6%89%80%20%E5%8C%97%E5%8C%BA%E6%9D%B1%E6%A0%84%E7%94%BA1-1-14",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1008",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u845B\u585A\u5C0F\u5B66\u6821",
      "address": "\u5317\u533A\u5DDD\u897F3\u20109\u201024",
      "area": "\u6D66\u6728\u306E\u4E00\u90E8\u3001\u5609\u5C712\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5609\u5C716\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E0A\u571F\u5730\u4E80\u3001\u5DDD\u897F1\uFF5E4\u4E01\u76EE\u3001\u7F8E\u91CC1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E8%91%9B%E5%A1%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E5%B7%9D%E8%A5%BF3%E2%80%909%E2%80%9024",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1009",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u3059\u307F\u308C\u4FDD\u80B2\u5712",
      "address": "\u5317\u533A\u77F3\u52D51\u201010\u20101",
      "area": "\u592A\u7530\u306E\u4E00\u90E8\u3001\u845B\u585A\u306E\u4E00\u90E8\u3001\u767D\u65B0\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u304B\u3076\u3068\u3084\u307E1\uFF5E2\u4E01\u76EE\u3001\u77F3\u52D51\uFF5E2\u4E01\u76EE\u3001\u67F3\u539F1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6A2A\u4E95\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E3%81%99%E3%81%BF%E3%82%8C%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8C%97%E5%8C%BA%E7%9F%B3%E5%8B%951%E2%80%9010%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1010",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u3053\u307E\u304F\u3055\u4FDD\u80B2\u5712\u5B50\u80B2\u3066\u652F\u63F4\u30BB\u30F3\u30BF\u30FC\u304A\u3072\u3055\u307E\u3072\u308D\u3070",
      "address": "\u5317\u533A\u67F3\u539F3-3-16",
      "area": "\u845B\u585A\u306E\u4E00\u90E8\u3001\u4E0B\u571F\u5730\u4E80\u306E\u4E00\u90E8\u3001\u767D\u65B0\u753A4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u67F3\u539F1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u67F3\u539F2\uFF5E6\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E3%81%93%E3%81%BE%E3%81%8F%E3%81%95%E4%BF%9D%E8%82%B2%E5%9C%92%E5%AD%90%E8%82%B2%E3%81%A6%E6%94%AF%E6%8F%B4%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%81%8A%E3%81%B2%E3%81%95%E3%81%BE%E3%81%B2%E3%82%8D%E3%81%B0%20%E5%8C%97%E5%8C%BA%E6%9F%B3%E5%8E%9F3-3-16",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1011",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u845B\u585A\u6771\u5C0F\u5B66\u6821",
      "address": "\u5317\u533A\u671D\u65E5\u753A4\u20101\u20102",
      "area": "\u845B\u585A\u306E\u4E00\u90E8\u3001\u592A\u7530\u306E\u4E00\u90E8\u3001\u5609\u5C71\u306E\u4E00\u90E8\u3001\u6A2A\u4E95\u306E\u4E00\u90E8\u3001\u671D\u65E5\u753A1\uFF5E4\u4E01\u76EE\u3001\u524D\u65B0\u7530\u306E\u4E00\u90E8\u3001\u65B0\u9F3B\u3001\u5185\u6CBC\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E8%91%9B%E5%A1%9A%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%9C%9D%E6%97%A5%E7%94%BA4%E2%80%901%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1012",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u592A\u7530\u4FDD\u80B2\u5712",
      "address": "\u5317\u533A\u592A\u75302005",
      "area": "\u592A\u7530\u306E\u4E00\u90E8\u3001\u7B20\u67F3\u306E\u4E00\u90E8\u3001\u6751\u65B0\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%A4%AA%E7%94%B0%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8C%97%E5%8C%BA%E5%A4%AA%E7%94%B02005",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1013",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u6728\u5D0E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5317\u533A\u6728\u5D0E3227",
      "area": "\u5185\u5CF6\u898B\u306E\u4E00\u90E8\u3001\u6D66\u30CE\u5165\u306E\u4E00\u90E8\u3001\u6728\u5D0E\u306E\u4E00\u90E8\u3001\u9CE5\u5C4B\u3001\u65E9\u901A\u306E\u4E00\u90E8\u3001\u7B20\u67F3\u306E\u4E00\u90E8\u3001\u6A2A\u4E95\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%9C%A8%E5%B4%8E%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8C%97%E5%8C%BA%E6%9C%A8%E5%B4%8E3227",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1014",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u5C3E\u5C71\u30CB\u30E5\u30FC\u30BF\u30A6\u30F3\u516C\u6C11\u9928",
      "address": "\u5317\u533A\u5185\u5CF6\u898B2185\u201030",
      "area": "\u5185\u5CF6\u898B\u306E\u4E00\u90E8\u3001\u6728\u5D0E\u306E\u4E00\u90E8\u3001\u5317\u967D1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%B0%BE%E5%B1%B1%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%BF%E3%82%A6%E3%83%B3%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E5%86%85%E5%B3%B6%E8%A6%8B2185%E2%80%9030",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1015",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u6A0B\u30CE\u5165\u516C\u6C11\u9928",
      "address": "\u5317\u533A\u6A0B\u30CE\u51651471",
      "area": "\u6728\u5D0E\u306E\u4E00\u90E8\u3001\u4E0B\u5927\u8C37\u5185\u3001\u4E0B\u65E9\u901A\u306E\u4E00\u90E8\u3001\u6A0B\u30CE\u5165",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%A8%8B%E3%83%8E%E5%85%A5%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E6%A8%8B%E3%83%8E%E5%85%A51471",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1016",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u7B39\u5C71\u516C\u6C11\u9928",
      "address": "\u5317\u533A\u7B39\u5C712058",
      "area": "\u5185\u5CF6\u898B\u306E\u4E00\u90E8\u3001\u6728\u5D0E\u306E\u4E00\u90E8\u3001\u7B39\u5C71\u3001\u6D66\u30CE\u5165\u306E\u4E00\u90E8\u3001\u6A2A\u571F\u5C45",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E7%AC%B9%E5%B1%B1%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8C%97%E5%8C%BA%E7%AC%B9%E5%B1%B12058",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1017",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u65E9\u901A\u5357\u5C0F\u5B66\u6821",
      "address": "\u5317\u533A\u9808\u62381\u20101\u20101",
      "area": "\u4E0B\u571F\u5730\u4E80\u306E\u4E00\u90E8\u3001\u9808\u6238\u3001\u9808\u62381\uFF5E5\u4E01\u76EE\u3001\u65B0\u4E95\u90F7\u3001\u65E9\u901A\u306E\u4E00\u90E8\u3001\u4ECF\u4F1D\u3001\u65E9\u901A\u53571\uFF5E5\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%97%A9%E9%80%9A%E5%8D%97%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E9%A0%88%E6%88%B81%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1018",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u65E9\u901A\u4E2D\u5B66\u6821",
      "address": "\u5317\u533A\u65E9\u901A396",
      "area": "\u5F69\u91CE1\uFF5E4\u4E01\u76EE\u3001\u65E9\u901A\u53171\uFF5E6\u4E01\u76EE\u3001\u4E0B\u65E9\u901A\u306E\u4E00\u90E8\u3001\u65E9\u901A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%97%A9%E9%80%9A%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E5%8C%97%E5%8C%BA%E6%97%A9%E9%80%9A396",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1019",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u5CA1\u65B9\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5317\u533A\u9577\u6238\u54424601",
      "area": "\u5341\u4E8C\u3001\u5E73\u6797\u3001\u7070\u585A\u3001\u5C71\u98EF\u91CE\u3001\u5927\u4E45\u4FDD\u3001\u5927\u702C\u67F3\u3001\u5927\u8FCE\u3001\u592A\u5B50\u5802\u3001\u9577\u6238\u5442\u3001\u9577\u6238\u5442\u65B0\u7530\u3001\u4E09\u30C4\u5C4B\u3001\u5341\u4E8C\u524D",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E5%B2%A1%E6%96%B9%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8C%97%E5%8C%BA%E9%95%B7%E6%88%B8%E5%91%824601",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1020",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u65E7\u4E09\u30C4\u68EE\u4FDD\u80B2\u5712",
      "address": "\u5317\u533A\u68EE\u4E0B1409",
      "area": "\u9AD8\u68EE\u3001\u9AD8\u68EE\u65B0\u7530\u3001\u68EE\u4E0B\u3001\u3059\u307F\u308C\u91CE4\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E6%97%A7%E4%B8%89%E3%83%84%E6%A3%AE%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8C%97%E5%8C%BA%E6%A3%AE%E4%B8%8B1409",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "1021",
      "ward": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "wardShort": "\u5317\u533A",
      "name": "\u9577\u6D66\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5317\u533A\u9577\u58341834\u20101",
      "area": "\u4E0A\u5927\u6708\u3001\u5CA1\u65B0\u7530\u3001\u4E0A\u5800\u7530\u3001\u91CC\u98EF\u91CE\u3001\u5927\u6708\u3001\u9577\u5834\u3001\u5185\u6CBC\u306E\u4E00\u90E8\u3001\u9577\u6238\u3001\u6D66\u6728\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8C%97%E5%8C%BA%20%E9%95%B7%E6%B5%A6%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8C%97%E5%8C%BA%E9%95%B7%E5%A0%B41834%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5317\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2001",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u5C71\u306E\u4E0B\u307E\u3061\u3065\u304F\u308A\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6771\u533A\u53E4\u5DDD\u753A4\u201012",
      "area": "\u795E\u660E\u753A\u3001\u6D5C\u753A\u3001\u53E4\u6E4A\u753A\u3001\u5C71\u306E\u4E0B\u753A\u3001\u81E8\u6D77\u753A\u3001\u81E8\u6E2F1\u4E01\u76EE\u3001\u9577\u8005\u753A\u3001\u5927\u5C711\uFF5E2\u4E01\u76EE\u3001\u6771\u65B0\u753A\u3001\u53E4\u5DDD\u753A\u3001\u5317\u8449\u753A\u3001\u677E\u5CF61\uFF5E3\u4E01\u76EE\u3001\u672B\u5E83\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%B1%B1%E3%81%AE%E4%B8%8B%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9D%B1%E5%8C%BA%E5%8F%A4%E5%B7%9D%E7%94%BA4%E2%80%9012",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2002",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u5C71\u306E\u4E0B\u4E2D\u5B66\u6821",
      "address": "\u6771\u533A\u79CB\u8449\u901A2\u20103722\u20107",
      "area": "\u79CB\u84491\u4E01\u76EE\u3001\u79CB\u8449\u901A2\uFF5E3\u4E01\u76EE\u3001\u6843\u5C71\u753A1\uFF5E2\u4E01\u76EE\u3001\u81E8\u6E2F\u753A2\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%B1%B1%E3%81%AE%E4%B8%8B%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%A7%8B%E8%91%89%E9%80%9A2%E2%80%903722%E2%80%907",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2003",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u6771\u5C71\u306E\u4E0B\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u85E4\u898B\u753A1\u201023\u201057",
      "area": "\u6CB3\u6E21\u5E9A\u3001\u6CB3\u6E211\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6CB3\u6E212\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6CB3\u6E213\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6CB3\u6E21\u672C\u753A\u3001\u85E4\u898B\u753A1\uFF5E2\u4E01\u76EE\u3001\u6708\u898B\u753A\u3001\u4E0A\u738B\u702C\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%B1%E5%B1%B1%E3%81%AE%E4%B8%8B%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E8%97%A4%E8%A6%8B%E7%94%BA1%E2%80%9023%E2%80%9057",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2004",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u85E4\u898B\u4E2D\u5B66\u6821",
      "address": "\u6771\u533A\u5C0F\u91D1\u753A3\u20105\u20101",
      "area": "\u6CB3\u6E211\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5C0F\u91D1\u53F0\u3001\u5C0F\u91D1\u753A1\uFF5E3\u4E01\u76EE\u3001\u5B9D\u753A\u3001\u9326\u753A\u3001\u7269\u898B\u5C711\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E8%97%A4%E8%A6%8B%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%B0%8F%E9%87%91%E7%94%BA3%E2%80%905%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2005",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u4E2D\u5730\u533A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6771\u533A\u677E\u548C\u753A15\u20108",
      "area": "\u5E78\u68041\uFF5E3\u4E01\u76EE\u3001\u6CB3\u6E212\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6CB3\u6E213\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5411\u967D1\u4E01\u76EE\u3001\u677E\u57121\uFF5E2\u4E01\u76EE\u3001\u677E\u548C\u753A\u3001\u7269\u898B\u5C713\uFF5E4\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E4%B8%AD%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9D%B1%E5%8C%BA%E6%9D%BE%E5%92%8C%E7%94%BA15%E2%80%908",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2006",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u81E8\u7A7A\u8239\u6C5F\u4F1A\u9928",
      "address": "\u6771\u533A\u8239\u6C5F\u753A2\u201011\u20103",
      "area": "\u7A7A\u6E2F\u897F1\uFF5E2\u4E01\u76EE\u3001\u6D5C\u8C37\u753A1\uFF5E2\u4E01\u76EE\u3001\u8239\u6C5F\u753A1\uFF5E3\u4E01\u76EE\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E8%87%A8%E7%A9%BA%E8%88%B9%E6%B1%9F%E4%BC%9A%E9%A4%A8%20%E6%9D%B1%E5%8C%BA%E8%88%B9%E6%B1%9F%E7%94%BA2%E2%80%9011%E2%80%903",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2007",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u4E0B\u5C71\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u592A\u5E732\u201018",
      "area": "\u6CB3\u6E21\u7532\u3001\u6CB3\u6E21\u65B0\u753A1\uFF5E2\u4E01\u76EE\u3001\u5411\u967D3\u4E01\u76EE\u3001\u4E0B\u5C711\uFF5E3\u4E01\u76EE\u3001\u65B0\u5DDD\u753A\u3001\u592A\u5E731\uFF5E4\u4E01\u76EE\u3001\u6D25\u5CF6\u5C4B5\u4E01\u76EE\u3001\u6839\u5BA4\u65B0\u753A\u3001\u677E\u6D5C\u753A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E4%B8%8B%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%A4%AA%E5%B9%B32%E2%80%9018",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2008",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u677E\u5D0E\u81EA\u6CBB\u4F1A\u9928",
      "address": "\u6771\u533A\u677E\u5D0E1\u201014\u201025",
      "area": "\u5411\u967D2\u4E01\u76EE\u3001\u767D\u92801\uFF5E2\u4E01\u76EE\u3001\u677E\u5D0E\u3001\u677E\u5D0E1\uFF5E2\u4E01\u76EE\u3001\u6709\u697D1\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%BE%E5%B4%8E%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E6%9D%B1%E5%8C%BA%E6%9D%BE%E5%B4%8E1%E2%80%9014%E2%80%9025",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2009",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u65B0\u6F5F\u5E02\u7ACB\u6771\u7279\u5225\u652F\u63F4\u5B66\u6821",
      "address": "\u6771\u533A\u6D77\u8001\u30B1\u702C31",
      "area": "\u6D25\u5CF6\u5C4B1\uFF5E4\u4E01\u76EE\u3001\u6D25\u5CF6\u5C4B6\uFF5E7\u4E01\u76EE\u3001\u6D77\u8001\u30B1\u702C\u3001\u65B0\u677E\u5D0E1\uFF5E3\u4E01\u76EE\u3001\u4E00\u65E5\u5E02\u3001\u6728\u5DE5\u65B0\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E5%B8%82%E7%AB%8B%E6%9D%B1%E7%89%B9%E5%88%A5%E6%94%AF%E6%8F%B4%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E6%B5%B7%E8%80%81%E3%82%B1%E7%80%AC31",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2010",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u5927\u5F62\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u5927\u5F62\u672C\u753A2\u20106\u20101",
      "area": "\u77F3\u52D5\u3001\u6D77\u8001\u30B1\u702C\u65B0\u753A\u3001\u9022\u8C37\u5185\u3001\u9022\u8C37\u51851\uFF5E6\u4E01\u76EE\u3001\u5927\u5F62\u672C\u753A\u3001\u5927\u5F62\u672C\u753A1\uFF5E6\u4E01\u76EE\u3001\u5BFA\u5C713\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E2D\u8208\u91CE\u3001\u672C\u6240\u3001\u672C\u62401\uFF5E3\u4E01\u76EE\u3001\u67F3\u30B1\u4E18\u3001\u8C4A2\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%A4%A7%E5%BD%A2%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%A4%A7%E5%BD%A2%E6%9C%AC%E7%94%BA2%E2%80%906%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2011",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u6728\u6238\u4E2D\u5B66\u6821",
      "address": "\u6771\u533A\u4E0A\u6728\u62385\u20101\u20101",
      "area": "\u4E0A\u6728\u6238\u306E\u4E00\u90E8\u3001\u4E0A\u6728\u62381\uFF5E3\u30015\u4E01\u76EE\u3001\u6750\u6728\u753A\u3001\u4E0B\u6728\u6238\u3001\u5BFA\u5C71\u3001\u5BFA\u5C711\uFF5E2\u4E01\u76EE\u3001\u5BFA\u5C713\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E2D\u6728\u6238\u3001\u306F\u306A\u307F\u305A\u304D2\u4E01\u76EE\u3001\u8C4A1\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9C%A8%E6%88%B8%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%8A%E6%9C%A8%E6%88%B85%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2012",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u7261\u4E39\u5C71\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u7261\u4E39\u5C716\u201015\u20101",
      "area": "\u4E0A\u6728\u6238\u306E\u4E00\u90E8\u3001\u4E0A\u6728\u62384\u4E01\u76EE\u3001\u4E0B\u6728\u62381\uFF5E3\u4E01\u76EE\u3001\u7AF9\u5C3E4\u4E01\u76EE\u3001\u306F\u306A\u307F\u305A\u304D1\u30013\u4E01\u76EE\u3001\u7261\u4E39\u5C713\uFF5E6\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E7%89%A1%E4%B8%B9%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%89%A1%E4%B8%B9%E5%B1%B16%E2%80%9015%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2013",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u7AF9\u5C3E\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u7AF9\u5C3E2-18-1",
      "area": "\u7AF9\u5C3E\u3001\u7AF9\u5C3E1\uFF5E3\u4E01\u76EE\u3001\u7D2B\u7AF96\uFF5E7\u4E01\u76EE\u3001\u7AF9\u5C3E\u5378\u65B0\u753A\u3001\u7D2B\u7AF9\u5378\u65B0\u753A\u3001\u5378\u65B0\u753A1\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E7%AB%B9%E5%B0%BE%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%AB%B9%E5%B0%BE2-18-1",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2014",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u6728\u6238\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u4E2D\u5C714\u20101\u20101",
      "area": "\u4E2D\u5C711\uFF5E8\u4E01\u76EE\u3001\u7261\u4E39\u5C711\uFF5E2\u4E01\u76EE\u3001\u5C71\u6728\u62385\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9C%A8%E6%88%B8%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%AD%E5%B1%B14%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2015",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u6771\u65B0\u6F5F\u4E2D\u5B66\u6821",
      "address": "\u6771\u533A\u5C71\u6728\u62381\u20102\u20101",
      "area": "\u698E\u3001\u698E\u753A\u3001\u5C71\u6728\u62381\uFF5E4\u4E01\u76EE\u3001\u5C71\u6728\u62386\uFF5E8\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%B1%E6%96%B0%E6%BD%9F%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E5%B1%B1%E6%9C%A8%E6%88%B81%E2%80%902%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2016",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u6C5F\u5357\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u6C5F\u53575-1-1",
      "area": "\u7D2B\u7AF92\uFF5E5\u4E01\u76EE\u3001\u6C5F\u53571\uFF5E6\u4E01\u76EE\u3001\u7D2B\u7AF9\u5C713\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5357\u7D2B\u7AF91\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%B1%9F%E5%8D%97%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E6%B1%9F%E5%8D%975-1-1",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2017",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u77F3\u5C71\u4E2D\u5B66\u6821",
      "address": "\u6771\u533A\u6771\u660E6\u20102",
      "area": "\u77F3\u5C711\uFF5E3\u30015\u4E01\u76EE\u3001\u6771\u660E1\uFF5E8\u4E01\u76EE\u3001\u5357\u7D2B\u7AF92\u4E01\u76EE\u3001\u65B0\u77F3\u5C715\u4E01\u76EE\u3001\u3082\u3048\u304E\u91CE1\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E7%9F%B3%E5%B1%B1%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E6%9D%B1%E6%98%8E6%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2018",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u4E2D\u91CE\u5C71\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u4E2D\u91CE\u5C711\u20101\u20101",
      "area": "\u77F3\u5C716\u4E01\u76EE\u3001\u4E0B\u5834\u3001\u4E0B\u5834\u65B0\u753A\u3001\u4E0B\u5834\u672C\u753A\u3001\u65B0\u77F3\u5C711\uFF5E4\u4E01\u76EE\u3001\u4E2D\u5CF61\u4E01\u76EE\u3001\u4E2D\u91CE\u5C711\uFF5E5\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E4%B8%AD%E9%87%8E%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%B1%B11%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2019",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u5357\u4E2D\u91CE\u5C71\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u4E2D\u91CE\u5C71863\u20101",
      "area": "\u7C9F\u5C711\uFF5E4\u4E01\u76EE\u3001\u77F3\u5C714\u4E01\u76EE\u3001\u4E2D\u91CE\u5C716\uFF5E7\u4E01\u76EE\u3001\u6771\u4E2D\u91CE\u5C711\u4E01\u76EE\u3001\u3082\u3048\u304E\u91CE2\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E5%8D%97%E4%B8%AD%E9%87%8E%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%B1%B1863%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2020",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u30B7\u30EB\u30D0\u30FC\u30D4\u30A2\u77F3\u5C71",
      "address": "\u6771\u533A\u77F3\u5C71\u56E3\u573010-13",
      "area": "\u77F3\u5C71\u56E3\u5730\u3001\u733F\u30B1\u99AC\u58341\u4E01\u76EE\u3001\u4E2D\u5CF62\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E2D\u91CE\u5C718\u4E01\u76EE\u3001\u6771\u4E2D\u5CF61\uFF5E2\u4E01\u76EE\u3001\u6771\u4E2D\u91CE\u5C712\uFF5E5\u4E01\u76EE\u3001\u82E5\u8449\u753A1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E3%82%B7%E3%83%AB%E3%83%90%E3%83%BC%E3%83%94%E3%82%A2%E7%9F%B3%E5%B1%B1%20%E6%9D%B1%E5%8C%BA%E7%9F%B3%E5%B1%B1%E5%9B%A3%E5%9C%B010-13",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "2021",
      "ward": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "wardShort": "\u6771\u533A",
      "name": "\u6771\u4E2D\u91CE\u5C71\u5C0F\u5B66\u6821",
      "address": "\u6771\u533A\u733F\u30B1\u99AC\u58349",
      "area": "\u5CA1\u5C71\u3001\u733F\u30B1\u99AC\u58342\u4E01\u76EE\u3001\u65B0\u5CA1\u5C712\u4E01\u76EE\u3001\u5150\u6C60\u3001\u4E2D\u5CF62\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u4E2D\u5CF63\uFF5E4\u4E01\u76EE\u3001\u6771\u4E2D\u91CE\u5C716\uFF5E7\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%9D%B1%E5%8C%BA%20%E6%9D%B1%E4%B8%AD%E9%87%8E%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%9D%B1%E5%8C%BA%E7%8C%BF%E3%82%B1%E9%A6%AC%E5%A0%B49",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6771\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3001",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u93E1\u6DF5\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u767D\u5C71\u6D661\u2010207\u20103",
      "area": "\u533B\u5B66\u753A\u901A1\uFF5E2\u756A\u753A\u3001\u4E00\u756A\u5800\u901A\u753A\u306E\u4E00\u90E8\u3001\u5B66\u6821\u88CF\u753A\u3001\u5B66\u6821\u753A\u901A1\uFF5E2\u756A\u753A\u3001\u5DDD\u5CB8\u753A1\uFF5E3\u4E01\u76EE\u3001\u767D\u5C71\u6D661\uFF5E2\u4E01\u76EE\u3001\u767D\u5C71\u6D66\u65B0\u753A\u901A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%8F%A1%E6%B7%B5%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%99%BD%E5%B1%B1%E6%B5%A61%E2%80%90207%E2%80%903",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3002",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u95A2\u5C4B\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u95A2\u5C4B\u4E0B\u5DDD\u539F\u753A2\u2010664",
      "area": "\u5B66\u6821\u753A\u901A3\u756A\u753A\u3001\u6C34\u9053\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u95A2\u65B01\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u95A2\u5C4B\u306E\u4E00\u90E8\u3001\u95A2\u5C4B\u4E0B\u5DDD\u539F\u753A1\uFF5E2\u4E01\u76EE\u3001\u95A2\u5C4B\u65B0\u753A\u901A1\u4E01\u76EE\u3001\u95A2\u5C4B\u7530\u753A1\uFF5E3\u4E01\u76EE\u3001\u95A2\u5C4B\u672C\u6751\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u95A2\u5C4B\u677E\u6CE2\u753A1\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%96%A2%E5%B1%8B%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%96%A2%E5%B1%8B%E4%B8%8B%E5%B7%9D%E5%8E%9F%E7%94%BA2%E2%80%90664",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3003",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u95A2\u5C4B\u5730\u533A\u516C\u6C11\u9928",
      "address": "\u4E2D\u592E\u533A\u95A2\u5C4B\u662D\u548C\u753A3\u2010148\u20101",
      "area": "\u95A2\u65B01\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u95A2\u65B02\uFF5E3\u4E01\u76EE\u3001\u95A2\u5C4B\u306E\u4E00\u90E8\u3001\u95A2\u5C4B\u5FA1\u8239\u8535\u753A\u3001\u95A2\u5C4B\u91D1\u9262\u5C71\u753A\u3001\u95A2\u5C4B\u662D\u548C\u753A2\uFF5E3\u4E01\u76EE\u3001\u95A2\u5C4B\u65B0\u753A\u901A2\u4E01\u76EE\u3001\u95A2\u5C4B\u7530\u753A4\u4E01\u76EE\u3001\u95A2\u5C4B\u672C\u6751\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u95A2\u5C4B\u672C\u6751\u753A2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%96%A2%E5%B1%8B%E5%9C%B0%E5%8C%BA%E5%85%AC%E6%B0%91%E9%A4%A8%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%96%A2%E5%B1%8B%E6%98%AD%E5%92%8C%E7%94%BA3%E2%80%90148%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3004",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u6D5C\u6D66\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u6D5C\u6D66\u753A1\u20101",
      "area": "\u6C50\u898B\u53F0\u3001\u4FE1\u6FC3\u753A\u3001\u95A2\u5C4B\u306E\u4E00\u90E8\u3001\u95A2\u5C4B\u91D1\u885B\u753A1\uFF5E2\u4E01\u76EE\u3001\u95A2\u5C4B\u662D\u548C\u753A1\u4E01\u76EE\u3001\u95A2\u5C4B\u6D5C\u677E\u753A\u3001\u6D5C\u6D66\u753A1\uFF5E2\u4E01\u76EE\u3001\u6587\u4EAC\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%B5%9C%E6%B5%A6%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%B5%9C%E6%B5%A6%E7%94%BA1%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3005",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u6709\u660E\u53F0\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u6709\u660E\u53F04\u20101",
      "area": "\u6709\u660E\u5927\u6A4B\u753A\u3001\u6709\u660E\u53F0\u3001\u95A2\u5357\u753A\u3001\u95A2\u5C4B\u5927\u5DDD\u524D1\uFF5E2\u4E01\u76EE\u3001\u95A2\u5C4B\u6075\u753A\u3001\u5800\u5272\u753A\u3001\u5F25\u751F\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%9C%89%E6%98%8E%E5%8F%B0%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9C%89%E6%98%8E%E5%8F%B04%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3006",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u767D\u5C71\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u5DDD\u7AEF\u753A1\u20101",
      "area": "\u4E00\u756A\u5800\u901A\u753A\u306E\u4E00\u90E8\u3001\u4E0A\u5927\u5DDD\u524D\u901A1\uFF5E5\u756A\u753A\u3001\u5DDD\u7AEF\u753A1\uFF5E5\u4E01\u76EE\u3001\u897F\u5800\u901A1\uFF5E3\u756A\u753A\u3001\u897F\u5800\u524D\u901A1\uFF5E5\u756A\u753A\u3001\u6771\u5800\u901A1\uFF5E5\u756A\u753A\u3001\u6771\u5800\u524D\u901A1\uFF5E5\u756A\u753A\u3001\u53E4\u753A\u901A1\uFF5E5\u756A\u753A\u3001\u672C\u753A\u901A1\uFF5E5\u756A\u753A\u3001\u6A2A\u4E00\u756A\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%99%BD%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%B7%9D%E7%AB%AF%E7%94%BA1%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3007",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u5BC4\u5C45\u4E2D\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u55B6\u6240\u901A2\u2010592\u201012",
      "area": "\u65ED\u753A\u901A1\uFF5E2\u756A\u753A\u3001\u55B6\u6240\u901A1\uFF5E2\u756A\u753A\u3001\u4E0B\u65ED\u753A\u3001\u6C34\u9053\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6C34\u9053\u753A2\u4E01\u76EE\u3001\u5BFA\u88CF\u901A1\uFF5E2\u756A\u753A\u3001\u897F\u4E2D\u753A\u3001\u897F\u8239\u898B\u753A\u306E\u4E00\u90E8\u3001\u897F\u5800\u901A4\uFF5E5\u756A\u753A\u3001\u897F\u5800\u524D\u901A6\u756A\u753A\u3001\u6771\u4E2D\u901A1\uFF5E2\u756A\u753A\u3001\u53E4\u753A\u901A6\u756A\u753A\u3001\u5357\u6A2A\u5800\u753A\u3001\u5BC4\u5C45\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%AF%84%E5%B1%85%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%96%B6%E6%89%80%E9%80%9A2%E2%80%90592%E2%80%9012",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3008",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u65B0\u6F5F\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u6771\u5927\u7551\u901A1\u2010679",
      "area": "\u5317\u5927\u7551\u753A\u3001\u5317\u6D5C\u901A1\uFF5E2\u756A\u753A\u3001\u7530\u4E2D\u753A\u306E\u4E00\u90E8\u3001\u4E2D\u5927\u7551\u753A\u3001\u897F\u5927\u7551\u753A\u3001\u897F\u5800\u901A6\uFF5E8\u756A\u753A\u3001\u897F\u5800\u524D\u901A7\uFF5E9\u756A\u753A\u3001\u6771\u5800\u901A8\uFF5E9\u756A\u753A\u3001\u6771\u5927\u7551\u901A1\uFF5E2\u756A\u753A\u3001\u4E8C\u8449\u753A1\uFF5E2\u4E01\u76EE\u3001\u53E4\u753A\u901A7\uFF5E9\u756A\u753A\u3001\u5357\u5927\u7551\u753A\u3001\u5357\u6D5C\u901A1\uFF5E2\u756A\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9D%B1%E5%A4%A7%E7%95%91%E9%80%9A1%E2%80%90679",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3009",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u30AF\u30ED\u30B9\u30D1\u30EB\u306B\u3044\u304C\u305F",
      "address": "\u4E2D\u592E\u533A\u790E\u753A\u901A3\u20102086",
      "area": "\u76F8\u751F\u753A\u3001\u790E\u753A\u901A1\uFF5E6\u30CE\u753A\u3001\u790E\u753A\u901A\u4E0A1\u30CE\u753A\u3001\u4E0A\u5927\u5DDD\u524D\u901A6\uFF5E11\u756A\u753A\u3001\u5DDD\u7AEF\u753A6\u4E01\u76EE\u3001\u5317\u591A\u9580\u753A\u3001\u5317\u6BD8\u6C99\u9580\u753A\u3001\u4E0B\u5927\u5DDD\u524D\u901A1\uFF5E7\u30CE\u753A\u3001\u65B0\u5CF6\u753A\u901A1\uFF5E5\u30CE\u753A\u3001\u4F4F\u5409\u753A\u3001\u6708\u753A\u3001\u8C4A\u7167\u753A\u3001\u4E26\u6728\u753A\u3001\u897F\u53A9\u5CF6\u753A\u3001\u82B1\u753A\u3001\u6771\u53A9\u5CF6\u753A\u3001\u6771\u5800\u901A6\uFF5E7\u756A\u753A\u3001\u6771\u5800\u524D\u901A6\uFF5E9\u756A\u753A\u3001\u6771\u6E4A\u753A\u901A1\uFF5E3\u30CE\u753A\u3001\u8239\u5834\u753A1\u4E01\u76EE\u3001\u672C\u753A\u901A6\uFF5E11\u756A\u753A\u3001\u672C\u9593\u753A1\uFF5E2\u4E01\u76EE\u3001\u79E3\u5DDD\u5CB8\u901A1\uFF5E2\u4E01\u76EE\u3001\u898B\u65B9\u753A\u3001\u6E4A\u753A\u901A1\uFF5E2\u30CE\u753A\u3001\u5357\u591A\u9580\u753A\u3001\u5357\u6BD8\u6C99\u9580\u753A\u3001\u96EA\u753A\u3001\u82B3\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%91%E3%83%AB%E3%81%AB%E3%81%84%E3%81%8C%E3%81%9F%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%A4%8E%E7%94%BA%E9%80%9A3%E2%80%902086",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3010",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u4E8C\u8449\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30CF\u30A6\u30B9",
      "address": "\u4E2D\u592E\u533A\u53E4\u753A\u901A13\u20105148\u20102",
      "area": "\u66D9\u753A\u3001\u4E0A\u5927\u5DDD\u524D\u901A12\u756A\u753A\u3001\u7530\u4E2D\u753A\u306E\u4E00\u90E8\u3001\u897F\u8239\u898B\u753A\u306E\u4E00\u90E8\u3001\u897F\u5800\u901A9\uFF5E11\u756A\u753A\u3001\u897F\u5800\u524D\u901A10\uFF5E11\u756A\u753A\u3001\u6771\u5800\u901A10\uFF5E13\u756A\u753A\u3001\u6771\u5800\u524D\u901A10\uFF5E11\u756A\u753A\u3001\u4E8C\u8449\u753A3\u4E01\u76EE\u3001\u53E4\u753A\u901A10\uFF5E13\u756A\u753A\u3001\u672C\u753A\u901A12\uFF5E13\u756A\u753A\u3001\u5915\u6804\u753A\u3001\u6A2A\u516D\u756A\u753A\u3001\u6A2A\u4E03\u756A\u753A\u901A1\u4E01\u76EE\u3001\u56DB\u30C4\u5C4B\u753A1\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%BA%8C%E8%91%89%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%8F%E3%82%A6%E3%82%B9%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%8F%A4%E7%94%BA%E9%80%9A13%E2%80%905148%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3011",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u65B0\u6F5F\u67F3\u90FD\u4E2D\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u6804\u753A3\u20104213",
      "area": "\u795D\u753A\u3001\u6D6E\u6D32\u753A\u3001\u70CF\u5E3D\u5B50\u753A\u3001\u7FC1\u753A1\uFF5E2\u4E01\u76EE\u3001\u5BC4\u9644\u753A\u3001\u7AAA\u7530\u753A1\uFF5E4\u4E01\u76EE\u3001\u7AAA\u7530\u753A6\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFF\u753A1\uFF5E2\u4E01\u76EE\u3001\u6804\u753A1\uFF5E3\u4E01\u76EE\u3001\u83C5\u6839\u753A\u3001\u5BFA\u5C71\u753A\u3001\u897F\u53D7\u5730\u753A\u3001\u897F\u8239\u898B\u753A\u306E\u4E00\u90E8\u3001\u6771\u53D7\u5730\u753A\u3001\u96F2\u96C0\u753A\u3001\u672C\u753A\u901A14\u756A\u753A\u3001\u5143\u795D\u753A\u3001\u6A2A\u4E03\u756A\u753A\u901A2\uFF5E3\u4E01\u76EE\u3001\u56DB\u30C4\u5C4B\u753A2\uFF5E3\u4E01\u76EE\u3001\u5BC4\u5408\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E6%9F%B3%E9%83%BD%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%A0%84%E7%94%BA3%E2%80%904213",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3012",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u5317\u90E8\u7DCF\u5408\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u4E2D\u592E\u533A\u7A32\u8377\u753A3511-1",
      "area": "\u8D64\u5742\u753A1\uFF5E3\u4E01\u76EE\u3001\u7A32\u8377\u753A\u3001\u5165\u8239\u753A1\uFF5E6\u4E01\u76EE\u3001\u9B41\u753A\u3001\u7530\u753A1\uFF5E3\u4E01\u76EE\u3001\u9644\u8239\u753A1\uFF5E3\u4E01\u76EE\u3001\u897F\u6E4A\u753A\u901A1\uFF5E4\u30CE\u753A\u3001\u8240\u5DDD\u5CB8\u753A\u3001\u65E9\u5DDD\u753A1\uFF5E3\u4E01\u76EE\u3001\u6771\u5165\u8239\u753A\u3001\u6771\u6E4A\u753A\u901A4\u30CE\u753A\u3001\u8239\u5834\u753A2\u4E01\u76EE\u3001\u8239\u898B\u753A1\uFF5E2\u4E01\u76EE\u3001\u672C\u9593\u753A3\u4E01\u76EE\u3001\u677E\u5CA1\u753A\u3001\u7DD1\u753A\u3001\u6E4A\u753A\u901A3\uFF5E4\u30CE\u753A\u3001\u5143\u4E0B\u5CF6\u753A\u3001\u67F3\u5CF6\u753A1\uFF5E4\u4E01\u76EE\u3001\u6A2A\u4E03\u756A\u753A\u901A4\uFF5E5\u4E01\u76EE\u3001\u6D77\u8FBA\u753A1\uFF5E2\u756A\u753A\u3001\u7AAA\u7530\u753A5\u4E01\u76EE\u3001\u7AAA\u7530\u753A6\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7AAA\u7530\u753A7\u4E01\u76EE\u3001\u5FE0\u8535\u753A\u3001\u5BA4\u753A1\uFF5E2\u4E01\u76EE\u3001\u5C71\u7530\u753A1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%8C%97%E9%83%A8%E7%B7%8F%E5%90%88%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%A8%B2%E8%8D%B7%E7%94%BA3511-1",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3013",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u5357\u4E07\u4EE3\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u5E78\u897F4\u20101\u20101",
      "area": "\u6625\u65E5\u753A\u3001\u5E78\u753A\u3001\u5E78\u897F1\uFF5E4\u4E01\u76EE\u3001\u82B1\u57121\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u5927\u901A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u5927\u901A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5F01\u59291\uFF5E3\u4E01\u76EE\u3001\u6C34\u5CF6\u753A\u3001\u5357\u4E07\u4EE3\u753A\u3001\u516B\u5343\u4EE31\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%8D%97%E4%B8%87%E4%BB%A3%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%B9%B8%E8%A5%BF4%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3014",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u5BAE\u6D66\u4E2D\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u4E07\u4EE35\u20106\u20101",
      "area": "\u4E09\u548C\u753A\u3001\u6CBC\u5782\u897F2\uFF5E3\u4E01\u76EE\u3001\u4E07\u4EE31\uFF5E5\u4E01\u76EE\u3001\u4E07\u4EE3\u5CF6",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%AE%AE%E6%B5%A6%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%87%E4%BB%A35%E2%80%906%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3015",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u4E07\u4EE3\u9577\u5DBA\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u6771\u4E07\u4EE3\u753A4\u20101",
      "area": "\u84B2\u539F\u753A\u3001\u5929\u660E\u753A\u3001\u6CBC\u5782\u897F1\u4E01\u76EE\u3001\u4E07\u4EE36\u4E01\u76EE\u3001\u6771\u5927\u901A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u4E07\u4EE3\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%87%E4%BB%A3%E9%95%B7%E5%B6%BA%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%9D%B1%E4%B8%87%E4%BB%A3%E7%94%BA4%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3016",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u9577\u5DBA\u4FDD\u80B2\u5712",
      "address": "\u4E2D\u592E\u533A\u660E\u77F32\u20101\u201051",
      "area": "\u660E\u77F31\uFF5E2\u4E01\u76EE\u3001\u9577\u5DBA\u753A\u3001\u82B1\u57121\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u82B1\u57122\u4E01\u76EE\u3001\u6771\u5927\u901A1\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%95%B7%E5%B6%BA%E4%BF%9D%E8%82%B2%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%98%8E%E7%9F%B32%E2%80%901%E2%80%9051",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3017",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u6CBC\u5782\u4FDD\u80B2\u5712",
      "address": "\u4E2D\u592E\u533A\u6CBC\u5782\u67714\u20108\u201036",
      "area": "\u6CBC\u5782\u67713\uFF5E6\u4E01\u76EE\u3001\u65E5\u306E\u51FA3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7ADC\u304C\u5CF61\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%B2%BC%E5%9E%82%E4%BF%9D%E8%82%B2%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%B2%BC%E5%9E%82%E6%9D%B14%E2%80%908%E2%80%9036",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3018",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u6CBC\u5782\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u93E1\u304C\u5CA15\u20105",
      "area": "\u93E1\u304C\u5CA1\u3001\u7D2B\u7AF91\u4E01\u76EE\u3001\u897F\u99AC\u8D8A\u3001\u6CBC\u5782\u67711\uFF5E2\u4E01\u76EE\u3001\u65E5\u306E\u51FA1\uFF5E2\u4E01\u76EE\u3001\u65E5\u306E\u51FA3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u672C\u99AC\u8D8A1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%B2%BC%E5%9E%82%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8F%A1%E3%81%8C%E5%B2%A15%E2%80%905",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3019",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u7B39\u53E3\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u7B39\u53E32\u201047",
      "area": "\u7B39\u53E3\u3001\u7B39\u53E31\uFF5E3\u4E01\u76EE\u3001\u5357\u7B39\u53E31\uFF5E2\u4E01\u76EE\u3001\u7C73\u5C711\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%AC%B9%E5%8F%A3%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%AC%B9%E5%8F%A32%E2%80%9047",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3020",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u6075\u5149\u5B66\u5712\u7B2C\u4E00\u5E7C\u7A1A\u5712",
      "address": "\u4E2D\u592E\u533A\u5929\u795E\u5C3E1-4-1",
      "area": "\u5929\u795E1\uFF5E2\u4E01\u76EE\u3001\u5929\u795E\u5C3E1\uFF5E2\u4E01\u76EE\u3001\u82B1\u57121\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7C73\u5C71\u3001\u7C73\u5C712\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%81%B5%E5%85%89%E5%AD%A6%E5%9C%92%E7%AC%AC%E4%B8%80%E5%B9%BC%E7%A8%9A%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A4%A9%E7%A5%9E%E5%B0%BE1-4-1",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3021",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u770C\u7ACB\u65B0\u6F5F\u30C6\u30AF\u30CE\u30B9\u30AF\u30FC\u30EB",
      "address": "\u4E2D\u592E\u533A\u9419\u897F1\u201011\u20102",
      "area": "\u94191\uFF5E3\u4E01\u76EE\u3001\u9419\u897F1\u4E01\u76EE\u3001\u9419\u897F2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7D2B\u7AF9\u5C711\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7D2B\u7AF9\u5C712\u4E01\u76EE\u3001\u7D2B\u7AF9\u5C713\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7D2B\u7AF9\u5C714\uFF5E5\u4E01\u76EE\u3001\u7C73\u5C713\uFF5E4\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%9C%8C%E7%AB%8B%E6%96%B0%E6%BD%9F%E3%83%86%E3%82%AF%E3%83%8E%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%90%99%E8%A5%BF1%E2%80%9011%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3022",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u7D2B\u7AF9\u5C71\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u7D2B\u7AF9\u5C711\u201012\u20101",
      "area": "\u9419\u897F2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u795E\u9053\u5BFA\u3001\u795E\u9053\u5BFA1\uFF5E3\u4E01\u76EE\u3001\u795E\u9053\u5BFA\u53571\uFF5E2\u4E01\u76EE\u3001\u7D2B\u7AF9\u5C711\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7D2B\u7AF9\u5C716\uFF5E7\u4E01\u76EE\u3001\u5800\u4E4B\u5185\u53572\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5973\u6C60\u67711\u4E01\u76EE\u3001\u7C73\u5C715\uFF5E6\u4E01\u76EE\u3001\u548C\u5408\u753A1\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E7%B4%AB%E7%AB%B9%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%B4%AB%E7%AB%B9%E5%B1%B11%E2%80%9012%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3023",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u685C\u304C\u4E18\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u59E5\u30B1\u5C716\u20101\u201021",
      "area": "\u59E5\u30B1\u5C71\u306E\u4E00\u90E8\u3001\u59E5\u30B1\u5C713\uFF5E6\u4E01\u76EE\u3001\u4EAC\u738B1\uFF5E3\u4E01\u76EE\u3001\u9AD8\u5FD71\uFF5E2\u4E01\u76EE\u3001\u5C71\u4E8C\u30C4\u306E\u4E00\u90E8\u3001\u5C71\u4E8C\u30C41\uFF5E5\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%A1%9C%E3%81%8C%E4%B8%98%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A7%A5%E3%82%B1%E5%B1%B16%E2%80%901%E2%80%9021",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3024",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u5C71\u6F5F\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u5F01\u5929\u6A4B\u901A3\u20103\u20101",
      "area": "\u59E5\u30B1\u5C71\u306E\u4E00\u90E8\u3001\u59E5\u30B1\u5C711\uFF5E2\u4E01\u76EE\u3001\u6E05\u4E94\u90CE\u3001\u9577\u6F5F\u3001\u9577\u6F5F1\uFF5E3\u4E01\u76EE\u3001\u5F01\u5929\u6A4B\u901A1\uFF5E3\u4E01\u76EE\u3001\u5357\u9577\u6F5F\u3001\u7F8E\u306E\u91CC\u3001\u9418\u6728",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%B1%B1%E6%BD%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%BC%81%E5%A4%A9%E6%A9%8B%E9%80%9A3%E2%80%903%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3025",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u611B\u6CC9\u3053\u3069\u3082\u5712",
      "address": "\u4E2D\u592E\u533A\u4E0A\u62403\u201014\u20101",
      "area": "\u4E0A\u62401\uFF5E3\u4E01\u76EE\u3001\u4E0A\u6240\u4E2D1\uFF5E3\u4E01\u76EE\u3001\u4E0B\u6240\u5CF61\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E6%84%9B%E6%B3%89%E3%81%93%E3%81%A9%E3%82%82%E5%9C%92%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%8A%E6%89%803%E2%80%9014%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3026",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u4E0A\u6240\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u8FD1\u6C5F3\u20102\u20101",
      "area": "\u8FD1\u6C5F1\uFF5E3\u4E01\u76EE\u3001\u4E0A\u8FD1\u6C5F1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E0B\u6240\u5CF6\u3001\u65B0\u548C1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u65B0\u548C2\u4E01\u76EE\u3001\u6771\u5E78\u753A\u3001\u5800\u4E4B\u5185\u3001\u5800\u4E4B\u5185\u53571\u4E01\u76EE\u3001\u5800\u4E4B\u5185\u53572\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5800\u4E4B\u5185\u53573\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%8A%E6%89%80%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E8%BF%91%E6%B1%9F3%E2%80%902%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3027",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u4E0A\u5C71\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u5973\u6C60\u4E0A\u5C711\u20101\u201028",
      "area": "\u611B\u5B951\u4E01\u76EE\u3001\u4E0A\u8FD1\u6C5F1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E0A\u8FD1\u6C5F3\uFF5E4\u4E01\u76EE\u3001\u4E0A\u6240\u4E0A1\uFF5E3\u4E01\u76EE\u3001\u65B0\u5149\u753A\u306E\u4E00\u90E8\u3001\u6771\u51FA\u6765\u5CF6\u3001\u5357\u51FA\u6765\u5CF61\u4E01\u76EE\u3001\u5973\u6C60\u4E0A\u5C711\uFF5E2\u30015\u4E01\u76EE\u3001\u5973\u6C60\u53171\u4E01\u76EE\u3001\u5973\u6C60\u795E\u660E2\uFF5E3\u4E01\u76EE\u3001\u5973\u6C60\u897F1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%8A%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A5%B3%E6%B1%A0%E4%B8%8A%E5%B1%B11%E2%80%901%E2%80%9028",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3028",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u5973\u6C60\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u5973\u6C606\u20104\u20101",
      "area": "\u5C0F\u5F35\u67281\uFF5E3\u4E01\u76EE\u3001\u685C\u6728\u753A\u3001\u9CE5\u5C4B\u91CE\u306E\u4E00\u90E8\u3001\u5973\u6C601\u30012\u30015\uFF5E8\u4E01\u76EE\u3001\u5973\u6C60\u795E\u660E1\u4E01\u76EE\u3001\u5973\u6C60\u53571\uFF5E3\u4E01\u76EE\u3001\u548C\u5408\u753A2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E5%A5%B3%E6%B1%A0%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A5%B3%E6%B1%A06%E2%80%904%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3029",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u9CE5\u5C4B\u91CE\u5C0F\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u7F8E\u54B2\u753A2\u20104\u20107",
      "area": "\u611B\u5B952\u4E01\u76EE\u3001\u4E0A\u6CBC\u3001\u5927\u5CF6\u3001\u89AA\u677E\u3001\u6E56\u5357\u3001\u592A\u53F3\u30A8\u9580\u65B0\u7530\u306E\u4E00\u90E8\u3001\u9AD8\u7F8E\u753A\u3001\u9CE5\u5C4B\u91CE\u306E\u4E00\u90E8\u3001\u9CE5\u5C4B\u91CE2\uFF5E4\u4E01\u76EE\u3001\u9CE5\u5C4B\u91CE\u53571\uFF5E3\u4E01\u76EE\u3001\u7F8E\u54B2\u753A2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%B3%A5%E5%B1%8B%E9%87%8E%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%BE%8E%E5%92%B2%E7%94%BA2%E2%80%904%E2%80%907",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3030",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u9CE5\u5C4B\u91CE\u4E2D\u5B66\u6821",
      "address": "\u4E2D\u592E\u533A\u5973\u6C604\u201031\u20101",
      "area": "\u4E0A\u8FD1\u6C5F2\u4E01\u76EE\u3001\u65B0\u548C1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u65B0\u548C3\uFF5E4\u4E01\u76EE\u3001\u5973\u6C603\uFF5E4\u4E01\u76EE\u3001\u548C\u5408\u753A3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E9%B3%A5%E5%B1%8B%E9%87%8E%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A5%B3%E6%B1%A04%E2%80%9031%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "3031",
      "ward": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "wardShort": "\u4E2D\u592E\u533A",
      "name": "\u4E0A\u5C71\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30CF\u30A6\u30B9",
      "address": "\u4E2D\u592E\u533A\u7DB2\u5DDD\u539F2\u20101\u201015",
      "area": "\u611B\u5B953\u4E01\u76EE\u3001\u7DB2\u5DDD\u539F1\uFF5E2\u4E01\u76EE\u3001\u65B0\u5149\u753A\u306E\u4E00\u90E8\u3001\u51FA\u6765\u5CF61\uFF5E2\u4E01\u76EE\u3001\u9CE5\u5C4B\u91CE1\u4E01\u76EE\u3001\u7F8E\u54B2\u753A1\u4E01\u76EE\u3001\u5357\u51FA\u6765\u5CF62\u4E01\u76EE\u3001\u5973\u6C60\u4E0A\u5C713\uFF5E4\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%20%E4%B8%8A%E5%B1%B1%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%8F%E3%82%A6%E3%82%B9%20%E4%B8%AD%E5%A4%AE%E5%8C%BA%E7%B6%B2%E5%B7%9D%E5%8E%9F2%E2%80%901%E2%80%9015",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u4E2D\u592E\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4001",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u7B2C\u4E00\u4FDD\u80B2\u5712",
      "address": "\u6C5F\u5357\u533A\u4E80\u7530\u65B0\u660E\u753A2\u20106\u20101",
      "area": "\u4E80\u7530\u65B0\u660E\u753A1\uFF5E3\u4E01\u76EE\u3001\u4E80\u7530\u672C\u753A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u672C\u753A3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u672C\u753A4\u4E01\u76EE\u3001\u6771\u672C\u753A4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u672C\u753A5\u4E01\u76EE\u3001\u8239\u6238\u5C714\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%B8%80%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E6%96%B0%E6%98%8E%E7%94%BA2%E2%80%906%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4002",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u7B2C\u4E8C\u4FDD\u80B2\u5712",
      "address": "\u6C5F\u5357\u533A\u8ACF\u8A2A1\u20106\u201010",
      "area": "\u7A32\u84491\uFF5E3\u4E01\u76EE\u3001\u4E80\u7530\u5411\u967D1\uFF5E4\u4E01\u76EE\u3001\u4E80\u7530\u6C34\u9053\u753A1\u4E01\u76EE\u3001\u4E80\u7530\u6C34\u9053\u753A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8ACF\u8A2A1\uFF5E3\u4E01\u76EE\u3001\u6771\u672C\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u672C\u753A3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u672C\u753A4\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%BA%8C%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%AB%8F%E8%A8%AA1%E2%80%906%E2%80%9010",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4003",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u5E02\u6C11\u4F1A\u9928",
      "address": "\u6C5F\u5357\u533A\u8239\u6238\u5C715\u20107\u20102",
      "area": "\u837B\u66FD\u6839\u306E\u4E00\u90E8\u3001\u6885\u898B\u53F01\uFF5E3\u4E01\u76EE\u3001\u837B\u66FD\u6839\u3001\u837B\u66FD\u68391\uFF5E4\u4E01\u76EE\u3001\u837B\u66FD\u68395\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u7DD1\u753A4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u672C\u753A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u672C\u753A3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u57CE\u62402\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8305\u91CE\u5C711\uFF5E3\u4E01\u76EE\u3001\u624B\u4EE3\u5C711\uFF5E2\u4E01\u76EE\u3001\u65E5\u6C341\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u65E5\u6C342\u30013\u4E01\u76EE\u3001\u8239\u6238\u5C711\u4E01\u76EE\u3001\u8239\u6238\u5C712\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8239\u6238\u5C713\u4E01\u76EE\u3001\u8239\u6238\u5C714\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8239\u6238\u5C715\u4E01\u76EE\u3001\u5143\u753A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5143\u753A3\uFF5E5\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E5%B8%82%E6%B0%91%E4%BC%9A%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%88%B9%E6%88%B8%E5%B1%B15%E2%80%907%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4004",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u7B2C\u4E09\u4FDD\u80B2\u5712",
      "address": "\u6C5F\u5357\u533A\u4E80\u7530\u6771\u753A3\u20105\u201015",
      "area": "\u66D9\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u6771\u753A1\uFF5E4\u4E01\u76EE\u3001\u4E80\u7530\u6C34\u9053\u753A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u6C34\u9053\u753A3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u6C34\u9053\u753A4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6240\u5CF61\uFF5E2\u4E01\u76EE\u3001\u888B\u6D251\uFF5E4\u4E01\u76EE\u3001\u888B\u6D255\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u888B\u6D256\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%B8%89%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E6%9D%B1%E7%94%BA3%E2%80%905%E2%80%9015",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4005",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u4E2D\u5B66\u6821",
      "address": "\u6C5F\u5357\u533A\u57CE\u5C711\u20103\u20105",
      "area": "\u57CE\u6240\u3001\u4E80\u7530\u65B0\u660E\u753A4\u30015\u4E01\u76EE\u3001\u57CE\u62401\u4E01\u76EE\u3001\u57CE\u62402\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u57CE\u5C711\uFF5E4\u4E01\u76EE\u3001\u65E5\u6C341\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5143\u753A1\u4E01\u76EE\u3001\u5143\u753A2\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%9F%8E%E5%B1%B11%E2%80%903%E2%80%905",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4006",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u65E9\u901A\u5C0F\u5B66\u6821",
      "address": "\u6C5F\u5357\u533A\u65E9\u901A5-7-2",
      "area": "\u4E0B\u65E9\u901A1\u30012\u30013\u4E01\u76EE\u3001\u9577\u6F5F1\u4E01\u76EE\u3001\u4E80\u7530\u65E9\u901A1\uFF5E6\u4E01\u76EE\u3001\u6771\u65E9\u901A2\u4E01\u76EE\u3001\u4E38\u6F5F1\u4E01\u76EE\u3001\u4E0B\u65E9\u901A\u67F3\u75301\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%97%A9%E9%80%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%97%A9%E9%80%9A5-7-2",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4007",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u7B2C\u56DB\u4FDD\u80B2\u5712",
      "address": "\u6C5F\u5357\u533A\u897F\u753A4\u20106\u201024",
      "area": "\u65ED1\uFF5E4\u4E01\u76EE\u3001\u4E80\u7530\u5927\u67081\u4E01\u76EE\u3001\u4E80\u7530\u672C\u753A1\u4E01\u76EE\u3001\u4E80\u7530\u672C\u753A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u897F\u753A1\uFF5E6\u4E01\u76EE\u3001\u6771\u8239\u58341\uFF5E5\u4E01\u76EE\u3001\u6771\u672C\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u672C\u753A2\u4E01\u76EE\u3001\u6771\u672C\u753A3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8239\u6238\u5C712\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E5%9B%9B%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%A5%BF%E7%94%BA4%E2%80%906%E2%80%9024",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4008",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u6771\u5C0F\u5B66\u6821",
      "address": "\u6C5F\u5357\u533A\u4E80\u7530\u6C34\u9053\u753A3-2-45",
      "area": "\u7802\u5D29\u3001\u888B\u6D25\u306E\u4E00\u90E8\u3001\u4E80\u7530\u6C34\u9053\u753A3\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u6C34\u9053\u753A4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u6C34\u9053\u753A5\u4E01\u76EE\u3001\u4E09\u689D\u5CA11\u30012\u4E01\u76EE\u3001\u7802\u5CA11\u4E01\u76EE\u3001\u7802\u5CA12\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7802\u5CA13\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7802\u5CA14\u4E01\u76EE\u3001\u7802\u5C711\u30012\u4E01\u76EE\u3001\u888B\u6D256\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E6%B0%B4%E9%81%93%E7%94%BA3-2-45",
      "updateInfo": "\u6295\u7968\u6240\u3092\u4E80\u7530\u6771\u5150\u7AE5\u9928\u304B\u3089\u4E80\u7530\u6771\u5C0F\u5B66\u6821\u3078\u5909\u66F4",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4009",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E80\u7530\u7B2C\u4E94\u4FDD\u80B2\u5712",
      "address": "\u6C5F\u5357\u533A\u4E80\u7530\u4E2D\u5CF62\u20104\u201014",
      "area": "\u4E80\u7530\u5927\u67082\u30013\u4E01\u76EE\u3001\u4E80\u7530\u4E2D\u5CF61\uFF5E4\u4E01\u76EE\u3001\u5C71\u4E8C\u30C4\u306E\u4E00\u90E8\u3001\u4E80\u7530\u3001\u4E80\u7530\u30CE\u5185\u9AD8\u5C71",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%80%E7%94%B0%E7%AC%AC%E4%BA%94%E4%BF%9D%E8%82%B2%E5%9C%92%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%80%E7%94%B0%E4%B8%AD%E5%B3%B62%E2%80%904%E2%80%9014",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4010",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u6C5F\u5357\u533A\u5F79\u6240",
      "address": "\u6C5F\u5357\u533A\u6CC9\u753A3\u20104\u20105",
      "area": "\u6CC9\u753A1\uFF5E5\u4E01\u76EE\u3001\u9D5C\u30CE\u5B501\uFF5E4\u4E01\u76EE\u3001\u837B\u66FD\u6839\u306E\u4E00\u90E8\u3001\u837B\u66FD\u68395\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u7DD1\u753A1\uFF5E3\u4E01\u76EE\u3001\u4E80\u7530\u7DD1\u753A4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E80\u7530\u56DB\u30C4\u8208\u91CE1\uFF5E5\u4E01\u76EE\u3001\u4E94\u6708\u753A1\uFF5E3\u4E01\u76EE\u3001\u65E9\u82D71\uFF5E2\u4E01\u76EE\u3001\u8239\u6238\u5C71",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%BD%B9%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%B3%89%E7%94%BA3%E2%80%904%E2%80%905",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4011",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u3042\u3051\u307C\u306E\u5370\u5237\u56E3\u5730\u4E8B\u696D\u5354\u540C\u7D44\u5408\u4E8B\u52D9\u6240",
      "address": "\u6C5F\u5357\u533A\u66D9\u753A3-15-13",
      "area": "\u888B\u6D25\u306E\u4E00\u90E8\u3001\u66D9\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u66D9\u753A2\uFF5E5\u4E01\u76EE\u3001\u7802\u5CA12\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7802\u5CA13\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7802\u5CA15\u4E01\u76EE\u3001\u888B\u6D255\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u888B\u6D256\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E3%81%82%E3%81%91%E3%81%BC%E3%81%AE%E5%8D%B0%E5%88%B7%E5%9B%A3%E5%9C%B0%E4%BA%8B%E6%A5%AD%E5%8D%94%E5%90%8C%E7%B5%84%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%9B%99%E7%94%BA3-15-13",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4012",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u6C5F\u5357\u533A\u5F79\u6240\u6A2A\u8D8A\u51FA\u5F35\u6240",
      "address": "\u6C5F\u5357\u533A\u6A2A\u8D8A\u4E2D\u592E1\u20101\u20101",
      "area": "\u3044\u3076\u304D\u91CE1\uFF5E2\u4E01\u76EE\u3001\u6A2A\u8D8A\u3001\u6A2A\u8D8A\u4E0A\u753A1\uFF5E5\u4E01\u76EE\u3001\u6A2A\u8D8A\u4E2D\u592E1\uFF5E8\u4E01\u76EE\u3001\u6A2A\u8D8A\u6771\u753A1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%BD%B9%E6%89%80%E6%A8%AA%E8%B6%8A%E5%87%BA%E5%BC%B5%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%A8%AA%E8%B6%8A%E4%B8%AD%E5%A4%AE1%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4013",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u6A2A\u8D8A\u8FB2\u6751\u74B0\u5883\u6539\u5584\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u6CA2\u6D773\u20101\u201030",
      "area": "\u6CA2\u6D771\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%A8%AA%E8%B6%8A%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%B2%A2%E6%B5%B73%E2%80%901%E2%80%9030",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4014",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u6728\u6D25\u5730\u57DF\u7814\u4FEE\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u6728\u6D252\u20103\u201028",
      "area": "\u6728\u6D251\uFF5E5\u4E01\u76EE\u3001\u6728\u6D25\u5DE5\u696D\u56E3\u5730",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%9C%A8%E6%B4%A5%E5%9C%B0%E5%9F%9F%E7%A0%94%E4%BF%AE%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%9C%A8%E6%B4%A52%E2%80%903%E2%80%9028",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4015",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E8C\u672C\u6728\u5730\u533A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u4E8C\u672C\u67283\u20102\u201050",
      "area": "\u4E8C\u672C\u67281\uFF5E5\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%BA%8C%E6%9C%AC%E6%9C%A8%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%BA%8C%E6%9C%AC%E6%9C%A83%E2%80%902%E2%80%9050",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4016",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u5C0F\u6749\u5730\u533A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u5C0F\u67493\u201011\u201026",
      "area": "\u5C0F\u67491\uFF5E5\u4E01\u76EE\u3001\u5E73\u5C71",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%B0%8F%E6%9D%89%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%B0%8F%E6%9D%893%E2%80%9011%E2%80%9026",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4017",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u85E4\u5C71\u4F1A\u9928",
      "address": "\u6C5F\u5357\u533A\u85E4\u5C711\u20106\u201028",
      "area": "\u3046\u3050\u3044\u30591\uFF5E2\u4E01\u76EE\u3001\u99D2\u8FBC1\uFF5E2\u4E01\u76EE\u3001\u85E4\u5C711\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E8%97%A4%E5%B1%B1%E4%BC%9A%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E8%97%A4%E5%B1%B11%E2%80%906%E2%80%9028",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4018",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u713C\u5C71\u96C6\u843D\u958B\u767A\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u963F\u8CC0\u91CE2\u20101\u201020",
      "area": "\u963F\u8CC0\u91CE1\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E7%84%BC%E5%B1%B1%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E9%98%BF%E8%B3%80%E9%87%8E2%E2%80%901%E2%80%9020",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4019",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u30B5\u30F3\u30A6\u30A3\u30F3\u30B0\u6A2A\u8D8A",
      "address": "\u6C5F\u5357\u533A\u6A2A\u8D8A\u5DDD\u6839\u753A2\u201020\u20101",
      "area": "\u831C\u30B1\u4E18\u3001\u6A2A\u8D8A\u5DDD\u6839\u753A1\uFF5E5\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E3%82%B5%E3%83%B3%E3%82%A6%E3%82%A3%E3%83%B3%E3%82%B0%E6%A8%AA%E8%B6%8A%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%A8%AA%E8%B6%8A%E5%B7%9D%E6%A0%B9%E7%94%BA2%E2%80%9020%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4020",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u5927\u6C5F\u5C71\u8FB2\u6751\u74B0\u5883\u6539\u5584\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u7D30\u5C71401",
      "area": "\u8535\u5CA1\u3001\u7B39\u5C71\u3001\u76F4\u308A\u5C71\u3001\u897F\u5C71\u3001\u7D30\u5C71\u3001\u677E\u5C71",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E6%B1%9F%E5%B1%B1%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E7%B4%B0%E5%B1%B1401",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4021",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E38\u5C71\u5C0F\u5B66\u6821",
      "address": "\u6C5F\u5357\u533A\u4E38\u5C71300",
      "area": "\u5317\u5C71\u3001\u4E38\u5C71\u3001\u4E38\u5C71\u30CE\u5185\u5584\u4E4B\u4E1E\u7D44\u3001\u8317\u8377\u8C37",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%B8%B8%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E4%B8%B8%E5%B1%B1300",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4022",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u5927\u6DF5\u5C0F\u5B66\u6821",
      "address": "\u6C5F\u5357\u533A\u5927\u6E151760\u20101",
      "area": "\u6C5F\u53E3\u3001\u5927\u6E15\u3001\u4E09\u767E\u5730\u3001\u897F\u91CE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E6%B7%B5%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%A4%A7%E6%B8%951760%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4023",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u66FD\u91CE\u6728\u9023\u7D61\u6240",
      "address": "\u6C5F\u5357\u533A\u5929\u91CE2\u20107\u20102",
      "area": "\u5929\u91CE\u3001\u5929\u91CE1\uFF5E3\u4E01\u76EE\u3001\u5609\u6728\u3001\u695A\u5DDD\u3001\u66FD\u5DDD\u3001\u4FF5\u67F3\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%9B%BD%E9%87%8E%E6%9C%A8%E9%80%A3%E7%B5%A1%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%A4%A9%E9%87%8E2%E2%80%907%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4024",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u934B\u6F5F\u65B0\u7530\u81EA\u6CBB\u4F1A\u9928",
      "address": "\u6C5F\u5357\u533A\u934B\u6F5F\u65B0\u7530275",
      "area": "\u934B\u6F5F\u65B0\u7530\u3001\u4E38\u6F5F\u65B0\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E9%8D%8B%E6%BD%9F%E6%96%B0%E7%94%B0%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E9%8D%8B%E6%BD%9F%E6%96%B0%E7%94%B0275",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4025",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u4E21\u5DDD\u9023\u7D61\u6240",
      "address": "\u6C5F\u5357\u533A\u9152\u5C4B\u753A821\u20108",
      "area": "\u5609\u702C\u3001\u4E0A\u548C\u7530\u3001\u9152\u5C4B\u753A\u3001\u82B1\u30CE\u7267\u3001\u4E21\u5DDD1\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E4%B8%A1%E5%B7%9D%E9%80%A3%E7%B5%A1%E6%89%80%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E9%85%92%E5%B1%8B%E7%94%BA821%E2%80%908",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4026",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u5272\u91CE\u96C6\u843D\u958B\u767A\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u5272\u91CE684",
      "area": "\u4E21\u5DDD2\u4E01\u76EE\u3001\u5272\u91CE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%89%B2%E9%87%8E%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%89%B2%E9%87%8E684",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4027",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u548C\u7530\u516C\u6C11\u9928",
      "address": "\u6C5F\u5357\u533A\u548C\u75301482",
      "area": "\u5E73\u8CC0\u3001\u821E\u6F5F\u3001\u548C\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E5%92%8C%E7%94%B0%E5%85%AC%E6%B0%91%E9%A4%A8%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E5%92%8C%E7%94%B01482",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "4028",
      "ward": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "wardShort": "\u6C5F\u5357\u533A",
      "name": "\u66FD\u91CE\u6728\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u6C5F\u5357\u533A\u66FD\u91CE\u67281-21-8",
      "area": "\u7956\u7236\u8208\u91CE\u3001\u4E45\u8535\u8208\u91CE\u3001\u9418\u6728\u3001\u66FD\u91CE\u67281\uFF5E2\u4E01\u76EE\u3001\u592A\u53F3\u30A8\u9580\u65B0\u7530\u306E\u4E00\u90E8\u3001\u4FF5\u67F3\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E6%B1%9F%E5%8D%97%E5%8C%BA%20%E6%9B%BD%E9%87%8E%E6%9C%A8%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%B1%9F%E5%8D%97%E5%8C%BA%E6%9B%BD%E9%87%8E%E6%9C%A81-21-8",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u6C5F\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5001",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u65B0\u6D25\u7B2C\u4E00\u5C0F\u5B66\u6821",
      "address": "\u79CB\u8449\u533A\u65B0\u6D25\u672C\u753A4\u20104\u20103",
      "area": "\u5584\u9053\u753A1\u30012\u4E01\u76EE\u3001\u7530\u5BB61\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E2D\u6CA2\u753A\u3001\u65B0\u6D25\u672C\u753A1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u65B0\u6D25\u672C\u753A2\uFF5E4\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E7%AC%AC%E4%B8%80%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%96%B0%E6%B4%A5%E6%9C%AC%E7%94%BA4%E2%80%904%E2%80%903",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5002",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5317\u4E0A\u516C\u4F1A\u5802",
      "address": "\u79CB\u8449\u533A\u5317\u4E0A3\u201013\u201011",
      "area": "\u5317\u4E0A1\u4E01\u76EE\u3001\u5317\u4E0A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5317\u4E0A3\u4E01\u76EE\u3001\u4E0B\u8208\u91CE\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%8C%97%E4%B8%8A%E5%85%AC%E4%BC%9A%E5%A0%82%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%8C%97%E4%B8%8A3%E2%80%9013%E2%80%9011",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5003",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u65B0\u6D25\u7B2C\u4E09\u5C0F\u5B66\u6821",
      "address": "\u79CB\u8449\u533A\u5C71\u8C37\u753A3\u20104785",
      "area": "\u5927\u9E7F\u306E\u4E00\u90E8\u3001\u53E4\u7530\u3001\u53E4\u75301\uFF5E2\u4E01\u76EE\u3001\u53E4\u75303\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u53E4\u75304\u4E01\u76EE\u3001\u7F8E\u5E78\u753A1\uFF5E3\u4E01\u76EE\u3001\u7F8E\u55841\u30012\u4E01\u76EE\u3001\u5C71\u8C37\u753A1\uFF5E3\u4E01\u76EE\u3001\u65B0\u6D25\u672C\u753A1\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E7%AC%AC%E4%B8%89%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B1%B1%E8%B0%B7%E7%94%BA3%E2%80%904785",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5004",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u79CB\u8449\u533A\u5F79\u6240",
      "address": "\u79CB\u8449\u533A\u7A0B\u5CF62009",
      "area": "\u671D\u65E5\u306E\u4E00\u90E8\u3001\u65B0\u6804\u753A\u3001\u7530\u5BB62\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E2D\u6751\u3001\u65B0\u6D25\u3001\u65B0\u6D25\u7DD1\u753A\u3001\u897F\u5CF6\u3001\u897F\u53E4\u6D25\u306E\u4E00\u90E8\u3001\u6771\u5CF6\u306E\u4E00\u90E8\u3001\u7A0B\u5CF6\u3001\u5357\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%BD%B9%E6%89%80%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%A8%8B%E5%B3%B62009",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5005",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u7530\u5BB6\u753A\u5185\u4F1A\u9928\uFF08\u6C0F\u5B50\u4F1A\u9928\uFF09",
      "address": "\u79CB\u8449\u533A\u7530\u5BB63\u20101",
      "area": "\u7530\u5BB6\u3001\u7530\u5BB61\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7530\u5BB62\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7530\u5BB63\u4E01\u76EE\u3001\u5409\u5CA1\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%94%B0%E5%AE%B6%E7%94%BA%E5%86%85%E4%BC%9A%E9%A4%A8%EF%BC%88%E6%B0%8F%E5%AD%90%E4%BC%9A%E9%A4%A8%EF%BC%89%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%94%B0%E5%AE%B63%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5006",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u8349\u6C34\u753A\u5185\u4F1A\u9928",
      "address": "\u79CB\u8449\u533A\u8349\u6C34\u753A3\u20105\u20101",
      "area": "\u8349\u6C34\u753A1\uFF5E3\u4E01\u76EE\u3001\u5C0F\u53E3\u306E\u4E00\u90E8\u3001\u6EDD\u8C37\u753A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E8%8D%89%E6%B0%B4%E7%94%BA%E5%86%85%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E8%8D%89%E6%B0%B4%E7%94%BA3%E2%80%905%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5007",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u67C4\u76EE\u6728\u81EA\u6CBB\u4F1A\u9928",
      "address": "\u79CB\u8449\u533A\u67C4\u76EE\u6728309\u20104",
      "area": "\u98EF\u67F3\u3001\u67C4\u76EE\u6728\u3001\u6EDD\u8C37\u753A\u306E\u4E00\u90E8\u3001\u79CB\u84492\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%9F%84%E7%9B%AE%E6%9C%A8%E8%87%AA%E6%B2%BB%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%9F%84%E7%9B%AE%E6%9C%A8309%E2%80%904",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5008",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5927\u5B89\u5BFA\u96C6\u843D\u958B\u767A\u30BB\u30F3\u30BF\u30FC",
      "address": "\u79CB\u8449\u533A\u5927\u5B89\u5BFA318\u20102",
      "area": "\u5927\u5B89\u5BFA\u3001\u4E2D\u65B0\u7530\u3001\u6771\u91D1\u6CA2\u3001\u516D\u90F7\u306E\u4E00\u90E8\u3001\u91D1\u5C4B\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%A4%A7%E5%AE%89%E5%AF%BA%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%A4%A7%E5%AE%89%E5%AF%BA318%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5009",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u65E7\u6E80\u65E5\u5C0F\u5B66\u6821",
      "address": "\u79CB\u8449\u533A\u4E03\u65E5\u753A17\u2010\u4E59",
      "area": "\u5927\u8535\u3001\u4E03\u65E5\u753A\u3001\u6E80\u9858\u5BFA\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%97%A7%E6%BA%80%E6%97%A5%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E4%B8%83%E6%97%A5%E7%94%BA17%E2%80%90%E4%B9%99",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5010",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u7D50\u5E7C\u7A1A\u5712",
      "address": "\u79CB\u8449\u533A\u7D50160\u20103",
      "area": "\u837B\u5CF61\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u837B\u5CF62\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u7530\u5CF6\u306E\u4E00\u90E8\u3001\u798F\u5CF6\u3001\u7D50\u3001\u307F\u305D\u3089\u91CE1\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%B5%90%E5%B9%BC%E7%A8%9A%E5%9C%92%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%B5%90160%E2%80%903",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5011",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u304A\u304E\u304B\u308F\u3053\u3069\u3082\u5712",
      "address": "\u79CB\u8449\u533A\u4E2D\u91CE3\u201020\u20107",
      "area": "\u837B\u5CF61\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u837B\u5CF62\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u837B\u5CF63\u4E01\u76EE\u3001\u8ECA\u58341\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8ECA\u58342\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E2D\u91CE1\uFF5E3\u4E01\u76EE\u3001\u7530\u5CF6\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E3%81%8A%E3%81%8E%E3%81%8B%E3%82%8F%E3%81%93%E3%81%A9%E3%82%82%E5%9C%92%20%E7%A7%8B%E8%91%89%E5%8C%BA%E4%B8%AD%E9%87%8E3%E2%80%9020%E2%80%907",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5012",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5E02\u4E4B\u702C\u96C6\u843D\u30BB\u30F3\u30BF\u30FC",
      "address": "\u79CB\u8449\u533A\u5E02\u4E4B\u702C452",
      "area": "\u5E02\u4E4B\u702C\u3001\u899A\u8DEF\u6D25\u306E\u4E00\u90E8\u3001\u8ECA\u58341\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B8%82%E4%B9%8B%E7%80%AC%E9%9B%86%E8%90%BD%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B8%82%E4%B9%8B%E7%80%AC452",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5013",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5C0F\u5408\u5C0F\u5B66\u6821",
      "address": "\u79CB\u8449\u533A\u51FA\u6238180",
      "area": "\u6D66\u8208\u91CE\u3001\u5DDD\u6839\u3001\u5B50\u6210\u5834\u3001\u51FA\u6238\u3001\u65B0\u6D25\u56DB\u30C4\u8208\u91CE\u3001\u8568\u66FD\u6839\u3001\u5927\u79CB\u3001\u6885\u30CE\u6728\u3001\u5C0F\u5C4B\u5834\u3001\u5C0F\u6238\u4E0B\u7D44\u306E\u4E00\u90E8\u3001\u899A\u8DEF\u6D25\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E5%90%88%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%87%BA%E6%88%B8180",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5014",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5C0F\u5408\u6771\u5C0F\u5B66\u6821",
      "address": "\u79CB\u8449\u533A\u5C0F\u6238\u4E0A\u7D44234",
      "area": "\u5927\u9E7F\u306E\u4E00\u90E8\u3001\u6817\u5BAE\u3001\u53E4\u75303\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5C0F\u6238\u4E0A\u7D44\u3001\u5C0F\u6238\u4E0B\u7D44\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E5%90%88%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E6%88%B8%E4%B8%8A%E7%B5%84234",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5015",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u91D1\u6D25\u5730\u533A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u79CB\u8449\u533A\u53E4\u6D25597",
      "area": "\u671D\u65E5\u306E\u4E00\u90E8\u3001\u91D1\u6D25\u306E\u4E00\u90E8\u3001\u84B2\u30B1\u6CA2\u3001\u897F\u53E4\u6D25\u306E\u4E00\u90E8\u3001\u6771\u5CF6\u306E\u4E00\u90E8\u3001\u53E4\u6D25\u3001\u5272\u753A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E9%87%91%E6%B4%A5%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%8F%A4%E6%B4%A5597",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5016",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u91D1\u6D25\u516C\u4F1A\u5802",
      "address": "\u79CB\u8449\u533A\u91D1\u6D25618-2",
      "area": "\u91D1\u6D25\u306E\u4E00\u90E8\u3001\u5869\u8C37\u3001\u5272\u753A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E9%87%91%E6%B4%A5%E5%85%AC%E4%BC%9A%E5%A0%82%20%E7%A7%8B%E8%91%89%E5%8C%BA%E9%87%91%E6%B4%A5618-2",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5017",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5C0F\u53E3\u516C\u4F1A\u5802",
      "address": "\u79CB\u8449\u533A\u5C0F\u53E31013",
      "area": "\u5C0F\u53E3\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E5%8F%A3%E5%85%AC%E4%BC%9A%E5%A0%82%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E5%8F%A31013",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5018",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u65B0\u95A2\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u79CB\u8449\u533A\u4E0B\u65B0364\u20101",
      "area": "\u5B89\u90E8\u65B0\u3001\u4E0B\u65B0\u3001\u5E02\u65B0\u3001\u65B0\u90F7\u5C4B\u3001\u91D1\u5C4B\u306E\u4E00\u90E8\u3001\u7FBD\u4E0B\u3001\u5317\u3001\u5927\u95A2\u3001\u5CA1\u7530\u3001\u5C0F\u53E3\u306E\u4E00\u90E8\u3001\u516D\u90F7\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E9%96%A2%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E4%B8%8B%E6%96%B0364%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5019",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u79CB\u8449\u4F1A\u9928",
      "address": "\u79CB\u8449\u533A\u79CB\u84491\u201017\u20103",
      "area": "\u79CB\u84491\u4E01\u76EE\u3001\u79CB\u84492\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u79CB\u84493\u4E01\u76EE\u3001\u6EDD\u8C37\u753A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E7%A7%8B%E8%91%89%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%A7%8B%E8%91%891%E2%80%9017%E2%80%903",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5020",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u65B0\u6D25\u7B2C\u4E8C\u5C0F\u5B66\u6821",
      "address": "\u79CB\u8449\u533A\u65B0\u753A2\u20103\u20103",
      "area": "\u79CB\u84492\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u91D1\u6CA2\u753A1\uFF5E4\u4E01\u76EE\u3001\u65B0\u753A1\uFF5E3\u4E01\u76EE\u3001\u6EDD\u8C37\u672C\u753A\u3001\u65E5\u5B9D\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E7%AC%AC%E4%BA%8C%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%96%B0%E7%94%BA2%E2%80%903%E2%80%903",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5021",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u65B0\u6D25\u5730\u57DF\u5B66\u5712",
      "address": "\u79CB\u8449\u533A\u65B0\u6D25\u6771\u753A2-5-6",
      "area": "\u65B0\u91D1\u6CA2\u753A\u3001\u65B0\u6D25\u6771\u753A1\uFF5E3\u4E01\u76EE\u3001\u897F\u91D1\u6CA2\u3001\u6E80\u9858\u5BFA\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E6%96%B0%E6%B4%A5%E5%9C%B0%E5%9F%9F%E5%AD%A6%E5%9C%92%20%E7%A7%8B%E8%91%89%E5%8C%BA%E6%96%B0%E6%B4%A5%E6%9D%B1%E7%94%BA2-5-6",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5022",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u837B\u5DDD\u5C0F\u5B66\u6821",
      "address": "\u79CB\u8449\u533A\u8ECA\u5834922\u20101",
      "area": "\u3042\u304A\u3070\u901A1\uFF5E2\u4E01\u76EE\u3001\u837B\u91CE\u753A\u3001\u3053\u304C\u306D\u753A\u3001\u8ECA\u5834\u3001\u8ECA\u58341\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8ECA\u58342\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u8ECA\u58343\uFF5E5\u4E01\u76EE\u3001\u4E2D\u91CE4\uFF5E5\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E8%8D%BB%E5%B7%9D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E7%A7%8B%E8%91%89%E5%8C%BA%E8%BB%8A%E5%A0%B4922%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5023",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5DDD\u53E3\u5730\u57DF\u4EA4\u6D41\u4F1A\u9928",
      "address": "\u79CB\u8449\u533A\u5DDD\u53E3392\u20105",
      "area": "\u5DDD\u53E3\u3001\u5317\u6F5F\u3001\u5317\u4E0A\u3001\u5317\u4E0A2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5317\u4E0A\u65B0\u7530\u3001\u53E4\u7530\u30CE\u5185\u5927\u91CE\u958B\u3001\u3055\u3064\u304D\u91CE1\uFF5E4\u4E01\u76EE\u3001\u6E80\u9858\u5BFA\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B7%9D%E5%8F%A3%E5%9C%B0%E5%9F%9F%E4%BA%A4%E6%B5%81%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B7%9D%E5%8F%A3392%E2%80%905",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5024",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5C0F\u9808\u6238\u307E\u3061\u3065\u304F\u308A\u30BB\u30F3\u30BF\u30FC",
      "address": "\u79CB\u8449\u533A\u5C0F\u9808\u6238120\u20101",
      "area": "\u5C0F\u9808\u6238\u3001\u65B0\u4FDD\u3001\u6A2A\u5DDD\u6D5C\u306E\u4E00\u90E8\u3001\u7ADC\u7384",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E9%A0%88%E6%88%B8%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E9%A0%88%E6%88%B8120%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5025",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5C0F\u9808\u6238\u304D\u305A\u306A\u306E\u5BB6\uFF08\u300C\u30EF\u30FC\u30AF\u30BB\u30F3\u30BF\u30FC\u307B\u307B\u3048\u307F\u300D\u3068\u540C\u3058\u5EFA\u7269\u3067\u3059\uFF09",
      "address": "\u79CB\u8449\u533A\u5C0F\u54111744",
      "area": "\u5C0F\u5411\u3001\u6C34\u7530\u3001\u6A2A\u5DDD\u6D5C\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E9%A0%88%E6%88%B8%E3%81%8D%E3%81%9A%E3%81%AA%E3%81%AE%E5%AE%B6%EF%BC%88%E3%80%8C%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%81%BB%E3%81%BB%E3%81%88%E3%81%BF%E3%80%8D%E3%81%A8%E5%90%8C%E3%81%98%E5%BB%BA%E7%89%A9%E3%81%A7%E3%81%99%EF%BC%89%20%E7%A7%8B%E8%91%89%E5%8C%BA%E5%B0%8F%E5%90%911744",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "5026",
      "ward": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "wardShort": "\u79CB\u8449\u533A",
      "name": "\u5C0F\u9808\u6238\u5730\u533A\u3075\u308C\u3042\u3044\u4F1A\u9928",
      "address": "\u79CB\u8449\u533A\u77E2\u4EE3\u753035",
      "area": "\u5929\u30F6\u6CA2\u3001\u938C\u5009\u3001\u821F\u62381\uFF5E2\u4E01\u76EE\u3001\u677E\u30F6\u4E181\u4E01\u76EE\u3001\u77E2\u4EE3\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E7%A7%8B%E8%91%89%E5%8C%BA%20%E5%B0%8F%E9%A0%88%E6%88%B8%E5%9C%B0%E5%8C%BA%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E4%BC%9A%E9%A4%A8%20%E7%A7%8B%E8%91%89%E5%8C%BA%E7%9F%A2%E4%BB%A3%E7%94%B035",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u79CB\u8449\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6001",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u767D\u6839\u5065\u5EB7\u798F\u7949\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5357\u533A\u767D\u68391364-12",
      "area": "\u4E0A\u4E0B\u8ACF\u8A2A\u6728\u306E\u4E00\u90E8\u3001\u767D\u6839\u306E\u4E00\u90E8\u3001\u767D\u6839\u9B5A\u753A\u3001\u80FD\u767B\u306E\u4E00\u90E8\u3001\u80FD\u767B1\uFF5E2\u4E01\u76EE\u3001\u5341\u4E94\u9593\u3001\u5C0F\u5742\u3001\u9BF5\u6F5F\u306E\u4E00\u90E8\u3001\u9BF5\u6F5F1\u4E01\u76EE\u3001\u4E03\u8ED2\u306E\u4E00\u90E8\u3001\u4E03\u8ED2\u753A\u3001\u767D\u6839\u56DB\u30C4\u8208\u91CE\u3001\u795E\u5C4B\u306E\u4E00\u90E8\u3001\u4FDD\u5742\u3001\u767D\u6839\u30CE\u5185\u4E03\u8ED2\u306E\u4E00\u90E8\u3001\u52A9\u6B21\u53F3\u30A8\u9580\u7D44\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E7%99%BD%E6%A0%B9%E5%81%A5%E5%BA%B7%E7%A6%8F%E7%A5%89%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E7%99%BD%E6%A0%B91364-12",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6002",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u8ACF\u8A2A\u6728\u4FDD\u80B2\u5712",
      "address": "\u5357\u533A\u767D\u6839\u6C34\u9053\u753A10\u201035",
      "area": "\u4E0A\u4E0B\u8ACF\u8A2A\u6728\u306E\u4E00\u90E8\u3001\u767D\u6839\u306E\u4E00\u90E8\u3001\u767D\u6839\u6C34\u9053\u753A\u3001\u767D\u6839\u30CE\u5185\u4E03\u8ED2\u306E\u4E00\u90E8\u3001\u767D\u6839\u65E5\u306E\u51FA\u753A\u3001\u7530\u4E2D\u3001\u6238\u982D\u306E\u4E00\u90E8\u3001\u80FD\u767B\u306E\u4E00\u90E8\u3001\u5E73\u6210\u753A\u3001\u52A9\u6B21\u53F3\u30A8\u9580\u7D44\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%AB%8F%E8%A8%AA%E6%9C%A8%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E7%99%BD%E6%A0%B9%E6%B0%B4%E9%81%93%E7%94%BA10%E2%80%9035",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6003",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u8328\u66FD\u6839\u5C0F\u5B66\u6821",
      "address": "\u5357\u533A\u8328\u66FD\u68391432\u20101",
      "area": "\u8328\u66FD\u6839\u306E\u4E00\u90E8\u3001\u6E05\u6C34\u3001\u6771\u8431\u5834",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%8C%A8%E6%9B%BD%E6%A0%B9%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8D%97%E5%8C%BA%E8%8C%A8%E6%9B%BD%E6%A0%B91432%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6004",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u65B0\u98EF\u7530\u5730\u57DF\u751F\u6D3B\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5357\u533A\u65B0\u98EF\u75301261\u20101",
      "area": "\u4E0A\u65B0\u7530\u3001\u65B0\u98EF\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%96%B0%E9%A3%AF%E7%94%B0%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E6%96%B0%E9%A3%AF%E7%94%B01261%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6005",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5E84\u702C\u5C0F\u5B66\u6821",
      "address": "\u5357\u533A\u83F1\u6F5F\u65B0\u7530193",
      "area": "\u8328\u66FD\u6839\u306E\u4E00\u90E8\u3001\u514E\u65B0\u7530\u3001\u725B\u5D0E\u3001\u5E84\u702C\u3001\u83F1\u6F5F\u3001\u98EF\u5CF6\u3001\u6C96\u65B0\u4FDD\u3001\u83F1\u6F5F\u65B0\u7530\u3001\u53E4\u5DDD\u65B0\u7530\u3001\u771F\u6728\u3001\u4E0A\u9053\u6F5F\u3001\u4E0B\u9053\u6F5F\u306E\u4E00\u90E8\u3001\u92F3\u7269\u5E2B\u8208\u91CE\u3001\u8718\u624B\u8208\u91CE\u3001\u5341\u4E8C\u9053\u5CF6\u3001\u6B21\u90CE\u53F3\u30A8\u9580\u8208\u91CE\u3001\u4E0A\u516B\u679A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%BA%84%E7%80%AC%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8D%97%E5%8C%BA%E8%8F%B1%E6%BD%9F%E6%96%B0%E7%94%B0193",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6006",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5C0F\u6797\u4FDD\u80B2\u5712",
      "address": "\u5357\u533A\u4E0B\u6728\u5C71613",
      "area": "\u6D66\u68A8\u3001\u4E0A\u6728\u5C71\u3001\u4E0B\u6728\u5C71\u3001\u6ADB\u7B25\u3001\u4E0A\u516B\u679A\u306E\u4E00\u90E8\u3001\u4E0B\u9053\u6F5F\u306E\u4E00\u90E8\u3001\u548C\u6CC9\u3001\u8535\u4E3B\u3001\u7530\u5C3E\u3001\u934B\u6F5F\u3001\u5E73\u6F5F\u3001\u5E73\u6F5F\u65B0\u7530\u3001\u4E07\u5E74",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%B0%8F%E6%9E%97%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E4%B8%8B%E6%9C%A8%E5%B1%B1613",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6007",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5357\u533A\u5F79\u6240",
      "address": "\u5357\u533A\u767D\u68391235",
      "area": "\u4E0A\u4E0B\u8ACF\u8A2A\u6728\u306E\u4E00\u90E8\u3001\u767D\u6839\u306E\u4E00\u90E8\u3001\u767D\u6839\u30CE\u5185\u4E03\u8ED2\u306E\u4E00\u90E8\u3001\u52A9\u6B21\u53F3\u30A8\u9580\u7D44\u306E\u4E00\u90E8\u3001\u6238\u982D\u306E\u4E00\u90E8\u3001\u89AA\u548C\u753A\u3001\u80FD\u767B\u306E\u4E00\u90E8\u3001 \u9BF5\u6F5F\u306E\u4E00\u90E8\u3001\u5C0F\u8535\u5B50\u306E\u4E00\u90E8\u3001\u4E03\u8ED2\u306E\u4E00\u90E8\u3001\u767D\u6839\u6771\u753A1\u4E01\u76EE\u3001\u767D\u6839\u53E4\u5DDD\u3001\u6749\u83DC\u3001\u795E\u5C4B\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%8D%97%E5%8C%BA%E5%BD%B9%E6%89%80%20%E5%8D%97%E5%8C%BA%E7%99%BD%E6%A0%B91235",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6008",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u30EF\u30FC\u30AF\u30BB\u30F3\u30BF\u30FC\u3057\u3089\u306F\u3059",
      "address": "\u5357\u533A\u6238\u77F345\u20102",
      "area": "\u4E0A\u6D66\u3001\u4E0A\u516B\u679A\u306E\u4E00\u90E8\u3001\u4E0B\u516B\u679A\u3001\u65B0\u751F\u753A1\uFF5E3\u4E01\u76EE\u3001\u6238\u77F3\u3001\u4E2D\u5C0F\u898B",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%81%97%E3%82%89%E3%81%AF%E3%81%99%20%E5%8D%97%E5%8C%BA%E6%88%B8%E7%9F%B345%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6009",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u81FC\u4E95\u5730\u57DF\u751F\u6D3B\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5357\u533A\u81FC\u4E951193\u20101",
      "area": "\u8D64\u6E0B\u3001\u671D\u6372\u3001\u81FC\u4E95\u3001\u5C0F\u8535\u5B50\u306E\u4E00\u90E8\u3001\u4E2D\u5C71\u3001\u897F\u7B20\u5DFB\u3001\u5800\u639B\u3001\u5F15\u8D8A\u3001\u5927\u90F7\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%87%BC%E4%BA%95%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E8%87%BC%E4%BA%951193%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6010",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5927\u90F7\u5730\u57DF\u751F\u6D3B\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5357\u533A\u72AC\u5E30\u65B0\u7530751\u20106",
      "area": "\u72AC\u5E30\u65B0\u7530\u3001\u5927\u90F7\u306E\u4E00\u90E8\u3001\u897F\u9152\u5C4B\u3001\u6771\u7B20\u5DFB\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%83%B7%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E7%8A%AC%E5%B8%B0%E6%96%B0%E7%94%B0751%E2%80%906",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6011",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5927\u9DF2\u4FDD\u80B2\u5712",
      "address": "\u5357\u533A\u6771\u7B20\u5DFB\u65B0\u7530270\u20102",
      "area": "\u897F\u7B20\u5DFB\u65B0\u7530\u3001\u6771\u7B20\u5DFB\u306E\u4E00\u90E8\u3001\u6771\u7B20\u5DFB\u65B0\u7530\u3001\u9DF2\u30CE\u6728\u65B0\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%B7%B2%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E6%9D%B1%E7%AC%A0%E5%B7%BB%E6%96%B0%E7%94%B0270%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6012",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u4E2D\u9DF2\u30CE\u6728\u3075\u308C\u3042\u3044\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5357\u533A\u9DF2\u30CE\u6728\u65B0\u7530973",
      "area": "\u737A\u30F6\u901A\u3001\u6771\u7B20\u5DFB\u306E\u4E00\u90E8\u3001\u9DF2\u30CE\u6728\u65B0\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E4%B8%AD%E9%B7%B2%E3%83%8E%E6%9C%A8%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E9%B7%B2%E3%83%8E%E6%9C%A8%E6%96%B0%E7%94%B0973",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6013",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u6839\u5CB8\u5C0F\u5B66\u6821",
      "address": "\u5357\u533A\u5C71\u5D0E\u8208\u91CE2288",
      "area": "\u4E0A\u5869\u4FF5\u306E\u4E00\u90E8\u3001\u5317\u7530\u4E2D\u3001\u4E0B\u5869\u4FF5\u3001\u4E0B\u5C71\u5D0E\u3001\u65B0\u5C71\u5D0E\u753A1\uFF5E3\u4E01\u76EE\u3001\u9AD8\u4E95\u8208\u91CE\u3001\u9AD8\u4E95\u67711\uFF5E3\u4E01\u76EE\u3001\u4E2D\u5869\u4FF5\u3001\u6839\u5CB8\u3001\u677E\u6A4B\u3001\u5C71\u5D0E\u8208\u91CE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%A0%B9%E5%B2%B8%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E5%8D%97%E5%8C%BA%E5%B1%B1%E5%B4%8E%E8%88%88%E9%87%8E2288",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6014",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5927\u901A\u4FDD\u80B2\u5712",
      "address": "\u5357\u533A\u9DF2\u30CE\u6728\u65B0\u75305681",
      "area": "\u5927\u901A1\uFF5E2\u4E01\u76EE\u3001\u5927\u901A\u897F\u3001\u9DF2\u30CE\u6728\u65B0\u7530\u306E\u4E00\u90E8\u3001\u5927\u901A\u53576\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%80%9A%E4%BF%9D%E8%82%B2%E5%9C%92%20%E5%8D%97%E5%8C%BA%E9%B7%B2%E3%83%8E%E6%9C%A8%E6%96%B0%E7%94%B05681",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6015",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5927\u901A\u5730\u57DF\u751F\u6D3B\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5357\u533A\u5927\u901A\u53574\u2010105",
      "area": "\u5927\u901A\u9EC4\u91D11\uFF5E7\u4E01\u76EE\u3001\u5927\u901A\u53571\uFF5E5\u4E01\u76EE\u3001\u4E0A\u5869\u4FF5\u306E\u4E00\u90E8\u3001\u9DF2\u30CE\u6728\u65B0\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%A4%A7%E9%80%9A%E5%9C%B0%E5%9F%9F%E7%94%9F%E6%B4%BB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E5%A4%A7%E9%80%9A%E5%8D%974%E2%80%90105",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6016",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u5473\u65B9\u51FA\u5F35\u6240",
      "address": "\u5357\u533A\u5473\u65B91544",
      "area": "\u5473\u65B9",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E5%91%B3%E6%96%B9%E5%87%BA%E5%BC%B5%E6%89%80%20%E5%8D%97%E5%8C%BA%E5%91%B3%E6%96%B91544",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6017",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u897F\u767D\u6839\u516C\u6C11\u9928",
      "address": "\u5357\u533A\u897F\u767D\u68391563\u20101",
      "area": "\u897F\u767D\u6839",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E8%A5%BF%E7%99%BD%E6%A0%B9%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8D%97%E5%8C%BA%E8%A5%BF%E7%99%BD%E6%A0%B91563%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6018",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u4E03\u7A42\u516C\u6C11\u9928",
      "address": "\u5357\u533A\u5409\u6C5F238\u20101",
      "area": "\u5C45\u5BBF\u3001\u5927\u5009\u3001\u5927\u5009\u65B0\u7530\u3001\u5C71\u738B\u3001\u5C71\u738B\u65B0\u7530\u3001\u4E03\u7A42\u3001\u5409\u6C5F\u3001\u5409\u7530\u65B0\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E4%B8%83%E7%A9%82%E5%85%AC%E6%B0%91%E9%A4%A8%20%E5%8D%97%E5%8C%BA%E5%90%89%E6%B1%9F238%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6019",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u6708\u6F5F\u51FA\u5F35\u6240",
      "address": "\u5357\u533A\u6708\u6F5F535",
      "area": "\u5927\u5225\u7576\u3001\u6708\u6F5F\u3001\u897F\u8431\u5834",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%9C%88%E6%BD%9F%E5%87%BA%E5%BC%B5%E6%89%80%20%E5%8D%97%E5%8C%BA%E6%9C%88%E6%BD%9F535",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6020",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u66F2\u901A\u591A\u76EE\u7684\u5171\u540C\u5229\u7528\u65BD\u8A2D",
      "address": "\u5357\u533A\u4E0A\u66F2\u901A24",
      "area": "\u4E0A\u66F2\u901A\u3001\u4E0B\u66F2\u901A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%9B%B2%E9%80%9A%E5%A4%9A%E7%9B%AE%E7%9A%84%E5%85%B1%E5%90%8C%E5%88%A9%E7%94%A8%E6%96%BD%E8%A8%AD%20%E5%8D%97%E5%8C%BA%E4%B8%8A%E6%9B%B2%E9%80%9A24",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "6021",
      "ward": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "wardShort": "\u5357\u533A",
      "name": "\u6771\u9577\u5D8B\u96C6\u843D\u958B\u767A\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5357\u533A\u6771\u9577\u5D8B89\u20107",
      "area": "\u6771\u9577\u5D8B\u3001\u6728\u6ED1\u3001\u91E3\u5BC4\u65B0\u3001\u91E3\u5BC4",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E5%8D%97%E5%8C%BA%20%E6%9D%B1%E9%95%B7%E5%B6%8B%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%8D%97%E5%8C%BA%E6%9D%B1%E9%95%B7%E5%B6%8B89%E2%80%907",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u5357\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7001",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u897F\u533A\u5F79\u6240",
      "address": "\u897F\u533A\u5BFA\u5C3E\u67713-14-41",
      "area": "\u5BFA\u5C3E\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u4E0A1\uFF5E4\u4E01\u76EE\u3001\u5BFA\u5C3E\u4E0A5\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u4E0A6\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u67711\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u67712\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%A5%BF%E5%8C%BA%E5%BD%B9%E6%89%80%20%E8%A5%BF%E5%8C%BA%E5%AF%BA%E5%B0%BE%E6%9D%B13-14-41",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7002",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u65B0\u901A\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5742\u4E95\u67716\u201018\u20101",
      "area": "\u5742\u4E95\u306E\u4E00\u90E8\u3001\u5742\u4E953\u4E01\u76EE\u3001\u5742\u4E95\u7802\u5C711\uFF5E4\u4E01\u76EE\u3001\u5742\u4E95\u67716\u4E01\u76EE\u3001\u65B0\u7530\u306E\u4E00\u90E8\u3001\u65B0\u901A\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u4E0A5\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u4E0A6\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%96%B0%E9%80%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%9D%82%E4%BA%95%E6%9D%B16%E2%80%9018%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7003",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5742\u4E95\u6771\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5742\u4E95\u67715\u201017\u20101",
      "area": "\u4E80\u8C9D\u3001\u5C0F\u65B0\u306E\u4E00\u90E8\u3001\u5742\u4E951\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5742\u4E952\u4E01\u76EE\u3001\u5742\u4E95\u67713\uFF5E5\u4E01\u76EE\u3001\u65B0\u901A\u306E\u4E00\u90E8\u3001\u9808\u8CC0\u3001\u6D41\u901A\u30BB\u30F3\u30BF\u30FC1\uFF5E6\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%9D%82%E4%BA%95%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%9D%82%E4%BA%95%E6%9D%B15%E2%80%9017%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7004",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5742\u4E95\u8F2A\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5742\u4E95\u67711\u20102\u20101",
      "area": "\u5C0F\u91DD6\uFF5E8\u4E01\u76EE\u3001\u5C0F\u91DD\u5357\u3001\u5C0F\u91DD\u5357\u53F0\u306E\u4E00\u90E8\u3001\u5742\u4E951\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5742\u4E95\u67711\uFF5E2\u4E01\u76EE\u3001\u5BFA\u5C3E\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u671D\u65E5\u901A\u3001\u5BFA\u5C3E\u67711\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u524D\u901A1\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%9D%82%E4%BA%95%E8%BC%AA%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%9D%82%E4%BA%95%E6%9D%B11%E2%80%902%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7005",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5C0F\u65B0\u4E2D\u5B66\u6821",
      "address": "\u897F\u533A\u5C0F\u65B0\u897F3\u201018\u20101",
      "area": "\u5C0F\u65B0\u306E\u4E00\u90E8\u3001\u5C0F\u65B0\u5927\u901A1\uFF5E2\u4E01\u76EE\u3001\u5C0F\u65B0\u897F1\uFF5E3\u4E01\u76EE\u3001\u5C0F\u65B0\u53571\uFF5E2\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B0%8F%E6%96%B0%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E6%96%B0%E8%A5%BF3%E2%80%9018%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7006",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5C0F\u91DD\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5C0F\u91DD2\u201036\u20101",
      "area": "\u9752\u5C71\u6C34\u9053\u3001\u5C0F\u91DD2\u4E01\u76EE\u3001\u5C0F\u91DD4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5C0F\u91DD5\u4E01\u76EE\u3001\u5C0F\u91DD\u4E0A\u5C71\u306E\u4E00\u90E8\u3001\u5C0F\u91DD\u304C\u4E18\u306E\u4E00\u90E8\u3001\u5C0F\u91DD\u85E4\u5C71\u3001\u5C0F\u91DD\u5357\u53F0\u306E\u4E00\u90E8\u3001\u6771\u9752\u5C711\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B0%8F%E9%87%9D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E9%87%9D2%E2%80%9036%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7007",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5C0F\u91DD\u4E2D\u5B66\u6821",
      "address": "\u897F\u533A\u5C0F\u91DD1\u201037\u20101",
      "area": "\u5C0F\u65B0\u306E\u4E00\u90E8\u3001\u5C0F\u65B01\uFF5E5\u4E01\u76EE\u3001\u5C0F\u91DD1\u30013\u4E01\u76EE\u3001\u5C0F\u91DD4\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5E73\u5CF61\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B0%8F%E9%87%9D%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E9%87%9D1%E2%80%9037%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7008",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u6771\u9752\u5C71\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u9752\u5C71261\u20101",
      "area": "\u9752\u5C71\u306E\u4E00\u90E8\u3001\u9752\u5C711\uFF5E3\u4E01\u76EE\u3001\u9752\u5C71\u65B0\u753A\u3001\u6D66\u5C711\u4E01\u76EE\u3001\u6771\u9752\u5C711\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u6771\u9752\u5C712\u4E01\u76EE\u3001\u5E73\u5CF6\u3001\u5E73\u5CF61\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5E73\u5CF62\uFF5E3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%9D%B1%E9%9D%92%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E9%9D%92%E5%B1%B1261%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7009",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u9752\u5C71\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30CF\u30A6\u30B9",
      "address": "\u897F\u533A\u9752\u5C716\u201016\u201020",
      "area": "\u9752\u5C714\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u9752\u5C715\uFF5E6\u4E01\u76EE\u3001\u6D66\u5C712\uFF5E4\u4E01\u76EE\u3001\u95A2\u5C4B\u5800\u5272\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%9D%92%E5%B1%B1%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%83%8F%E3%82%A6%E3%82%B9%20%E8%A5%BF%E5%8C%BA%E9%9D%92%E5%B1%B16%E2%80%9016%E2%80%9020",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7010",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u9752\u5C71\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u897F\u6709\u660E\u753A4\u20101",
      "area": "\u9752\u5C71\u306E\u4E00\u90E8\u3001\u9752\u5C714\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u9752\u5C717\uFF5E8\u4E01\u76EE\u3001\u6709\u660E\u753A\u3001\u5C0F\u91DD\u4E0A\u5C71\u306E\u4E00\u90E8\u3001\u897F\u6709\u660E\u753A\u3001\u677E\u7F8E\u53F0",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%9D%92%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E8%A5%BF%E6%9C%89%E6%98%8E%E7%94%BA4%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7011",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u771F\u7802\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u771F\u78023\u201024\u20101",
      "area": "\u897F\u5C0F\u91DD\u53F03\u4E01\u76EE\u3001\u771F\u78021\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u771F\u78022\uFF5E4\u4E01\u76EE\u3001\u677E\u6D77\u304C\u4E181\uFF5E4\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E7%9C%9F%E7%A0%82%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E7%9C%9F%E7%A0%823%E2%80%9024%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7012",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5742\u4E95\u8F2A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u533A\u5C0F\u91DD\u897F1\u201012\u201012",
      "area": "\u5C0F\u91DD\u304C\u4E18\u306E\u4E00\u90E8\u3001\u5C0F\u91DD\u53F0\u3001\u5C0F\u91DD\u897F1\uFF5E2\u4E01\u76EE\u3001\u5BFA\u5C3E\u53F01\uFF5E2\u4E01\u76EE\u3001\u897F\u5C0F\u91DD\u53F01\uFF5E2\u4E01\u76EE\u3001\u771F\u78021\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%9D%82%E4%BA%95%E8%BC%AA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E5%8C%BA%E5%B0%8F%E9%87%9D%E8%A5%BF1%E2%80%9012%E2%80%9012",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7013",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u4E94\u5341\u5D50\u4E2D\u5B66\u6821",
      "address": "\u897F\u533A\u4E0A\u65B0\u6804\u753A5\u20103\u20101",
      "area": "\u4E0A\u65B0\u6804\u753A1\uFF5E4\u4E01\u76EE\u3001\u4E0A\u65B0\u6804\u753A5\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u53171\uFF5E2\u4E01\u76EE\u3001\u5BFA\u5C3E\u53F03\u4E01\u76EE\u3001\u5BFA\u5C3E\u4E2D\u592E\u516C\u5712\u3001\u5BFA\u5C3E\u897F1\u4E01\u76EE\u3001\u5BFA\u5C3E\u897F5\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%BA%94%E5%8D%81%E5%B5%90%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E4%B8%8A%E6%96%B0%E6%A0%84%E7%94%BA5%E2%80%903%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7014",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u4E94\u5341\u5D50\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5BFA\u5C3E\u897F4\u201023\u20101",
      "area": "\u4E94\u5341\u5D501\u306E\u753A\u3001\u4E94\u5341\u5D50\u67711\uFF5E3\u4E01\u76EE\u3001\u4E0A\u65B0\u6804\u753A5\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E0A\u65B0\u6804\u753A6\u4E01\u76EE\u3001\u5927\u5B66\u53571\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5BFA\u5C3E\u897F2\uFF5E4\u4E01\u76EE\u3001\u5BFA\u5C3E\u897F5\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%BA%94%E5%8D%81%E5%B5%90%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%AF%BA%E5%B0%BE%E8%A5%BF4%E2%80%9023%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7015",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u4E0A\u4E94\u5341\u5D50\u4FDD\u80B2\u5712",
      "address": "\u897F\u533A\u4E94\u5341\u5D502\u306E\u753A8404\u20101",
      "area": "\u4E94\u5341\u5D502\u306E\u753A\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%B8%8A%E4%BA%94%E5%8D%81%E5%B5%90%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E5%8C%BA%E4%BA%94%E5%8D%81%E5%B5%902%E3%81%AE%E7%94%BA8404%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7016",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5185\u91CE\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5185\u91CE\u5C71\u624B2\u201018\u201036",
      "area": "\u4E94\u5341\u5D502\u306E\u753A\u306E\u4E00\u90E8\u3001\u5185\u91CE\u5C71\u624B1\uFF5E2\u4E01\u76EE\u3001\u5927\u5B66\u53571\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5927\u5B66\u53572\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%86%85%E9%87%8E%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E5%B1%B1%E6%89%8B2%E2%80%9018%E2%80%9036",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7017",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u897F\u51FA\u5F35\u6240\uFF08\u5185\u91CE\u307E\u3061\u3065\u304F\u308A\u30BB\u30F3\u30BF\u30FC\uFF09",
      "address": "\u897F\u533A\u5185\u91CE\u753A413",
      "area": "\u5185\u91CE\u753A\u3001\u69D9\u5C3E",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%A5%BF%E5%87%BA%E5%BC%B5%E6%89%80%EF%BC%88%E5%86%85%E9%87%8E%E3%81%BE%E3%81%A1%E3%81%A5%E3%81%8F%E3%82%8A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%EF%BC%89%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E7%94%BA413",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7018",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5185\u91CE\u4E2D\u5B66\u6821",
      "address": "\u897F\u533A\u5185\u91CE\u897F1\u201010\u20101",
      "area": "\u4E94\u5341\u5D503\u306E\u753A\u5317\u3001\u4E94\u5341\u5D503\u306E\u753A\u4E2D\u3001\u4E94\u5341\u5D503\u306E\u753A\u897F\u3001\u4E94\u5341\u5D503\u306E\u753A\u6771\u3001\u4E94\u5341\u5D503\u306E\u753A\u5357\u3001\u4E94\u5341\u5D50\u4E0B\u5D0E\u5C71\u3001\u4E94\u5341\u5D50\u4E2D\u5CF6\u3001\u4E94\u5341\u5D50\u4E2D\u5CF61\uFF5E2\u4E01\u76EE\u3001\u4E94\u5341\u5D50\u4E2D\u5CF63\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u5185\u91CE\u6F5F\u7AEF\u3001\u5185\u91CE\u6238\u4E2D\u624D\u3001\u5185\u91CE\u897F1\uFF5E3\u4E01\u76EE\u3001\u5185\u91CE\u897F\u304C\u4E181\uFF5E2\u4E01\u76EE\u3001\u5185\u91CE\u6F5F\u5411\u3001\u5185\u91CE\u5D0E\u5C71\u3001\u5185\u91CE\u9577\u6F5F\u3001\u5185\u91CE\u65E9\u89D2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%86%85%E9%87%8E%E4%B8%AD%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E8%A5%BF1%E2%80%9010%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7019",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u897F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u533A\u5185\u91CE\u4E0A\u65B0\u753A11810",
      "area": "\u4E94\u5341\u5D50\u4E0A\u5D0E\u5C71\u3001\u4E94\u5341\u5D50\u4E2D\u5CF63\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u4E94\u5341\u5D50\u4E2D\u5CF64\uFF5E5\u4E01\u76EE\u3001\u4E94\u5341\u5D50\u897F\u3001\u5185\u91CE\u4E0A\u65B0\u753A\u3001\u5185\u91CE\u95A2\u5834\u3001\u5185\u91CE\u897F\u304C\u4E183\u4E01\u76EE\u3001\u65B0\u4E2D\u6D5C1\uFF5E6\u4E01\u76EE\u3001\u4E2D\u6A29\u5BFA\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%A5%BF%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E5%8C%BA%E5%86%85%E9%87%8E%E4%B8%8A%E6%96%B0%E7%94%BA11810",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7020",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u65B0\u901A\u3064\u3070\u3055\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5927\u91CE137",
      "area": "\u5927\u91CE\u3001\u5742\u4E95\u306E\u4E00\u90E8\u3001\u65B0\u901A\u306E\u4E00\u90E8\u3001\u65B0\u901A\u897F1\uFF5E2\u4E01\u76EE\u3001\u65B0\u901A\u53571\uFF5E3\u4E01\u76EE\u3001\u5927\u5B66\u53571\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%96%B0%E9%80%9A%E3%81%A4%E3%81%B0%E3%81%95%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%A4%A7%E9%87%8E137",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7021",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u6728\u5C71\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u8C37\u51851886",
      "area": "\u8D64\u585A\u306E\u4E00\u90E8\u3001\u795E\u5C71\u3001\u6728\u5C71\u3001\u6771\u5C71\u3001\u8C37\u5185\u3001\u4E2D\u6A29\u5BFA\u306E\u4E00\u90E8\u3001\u56DB\u30C4\u90F7\u5C4B",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%9C%A8%E5%B1%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E8%B0%B7%E5%86%851886",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7022",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u8D64\u585A\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u8D64\u585A4478",
      "area": "\u8D64\u585A\u306E\u4E00\u90E8\u3001\u5742\u7530\u3001\u5C71\u5D0E",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E8%B5%A4%E5%A1%9A%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E8%B5%A4%E5%A1%9A4478",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7023",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u65B0\u6F5F\u56FD\u969B\u60C5\u5831\u5927\u5B66",
      "address": "\u897F\u533A\u307F\u305A\u304D\u91CE3\u20101\u20101",
      "area": "\u8D64\u585A\u306E\u4E00\u90E8\u3001\u85E4\u8535\u65B0\u7530\u3001\u307F\u305A\u304D\u91CE1\uFF5E6\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%96%B0%E6%BD%9F%E5%9B%BD%E9%9A%9B%E6%83%85%E5%A0%B1%E5%A4%A7%E5%AD%A6%20%E8%A5%BF%E5%8C%BA%E3%81%BF%E3%81%9A%E3%81%8D%E9%87%8E3%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7024",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u4FDD\u53E4\u91CE\u6728\u4FDD\u80B2\u5712",
      "address": "\u897F\u533A\u4FDD\u53E4\u91CE\u6728901",
      "area": "\u5C0F\u898B\u90F7\u5C4B\u3001\u52D8\u52A9\u90F7\u5C4B\u3001\u5C0F\u702C\u3001\u65E9\u6F5F\u3001\u85E4\u91CE\u6728\u3001\u4FDD\u53E4\u91CE\u6728\u3001\u524D\u91CE\u5916\u65B0\u7530\u3001\u660E\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%BF%9D%E5%8F%A4%E9%87%8E%E6%9C%A8%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E5%8C%BA%E4%BF%9D%E5%8F%A4%E9%87%8E%E6%9C%A8901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7025",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u4E2D\u91CE\u5C0F\u5C4B\u9023\u7D61\u6240",
      "address": "\u897F\u533A\u4E2D\u91CE\u5C0F\u5C4B590\u20104",
      "area": "\u5927\u53CB\u3001\u91D1\u5DFB\u65B0\u7530\u3001\u7530\u6F5F\u3001\u7530\u5CF6\u3001\u9053\u6CB3\u539F\u3001\u4E2D\u91CE\u5C0F\u5C4B",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E4%B8%AD%E9%87%8E%E5%B0%8F%E5%B1%8B%E9%80%A3%E7%B5%A1%E6%89%80%20%E8%A5%BF%E5%8C%BA%E4%B8%AD%E9%87%8E%E5%B0%8F%E5%B1%8B590%E2%80%904",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7026",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u7B20\u6728\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u7B20\u67281695",
      "area": "\u7B20\u6728\u3001\u65B0\u901A\u306E\u4E00\u90E8\u3001\u66FD\u548C\u3001\u9AD8\u5C71\u3001\u65B0\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E7%AC%A0%E6%9C%A8%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E7%AC%A0%E6%9C%A81695",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7027",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u9ED2\u57FC\u5357\u90E8\u516C\u6C11\u9928",
      "address": "\u897F\u533A\u9ED2\u9CE5974\u20102",
      "area": "\u7DD2\u7ACB\u6D41\u901A1\uFF5E2\u4E01\u76EE\u3001\u5317\u5834\u306E\u4E00\u90E8\u3001\u9ED2\u9CE5\u3001\u9CE5\u539F\u306E\u4E00\u90E8\u3001\u6D41\u901A3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%8D%97%E9%83%A8%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E9%BB%92%E9%B3%A5974%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7028",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u9ED2\u57FC\u5357\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u6728\u5834911\u20101",
      "area": "\u677F\u4E95\u306E\u4E00\u90E8\u3001\u91D1\u5DFB\u306E\u4E00\u90E8\u3001\u6728\u5834\u3001\u5C0F\u5E73\u65B9\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%8D%97%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E6%9C%A8%E5%A0%B4911%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7029",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u677F\u4E95\u516C\u6C11\u9928",
      "address": "\u897F\u533A\u677F\u4E952597",
      "area": "\u677F\u4E95\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E6%9D%BF%E4%BA%95%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E6%9D%BF%E4%BA%952597",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7030",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u9ED2\u57FC\u8FB2\u6751\u74B0\u5883\u6539\u5584\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u533A\u91D1\u5DFB746\u20103",
      "area": "\u5927\u91CE\u753A\u306E\u4E00\u90E8\u3001\u91D1\u5DFB\u306E\u4E00\u90E8\u3001\u5C0F\u5E73\u65B9\u306E\u4E00\u90E8\u3001\u9CE5\u539F\u306E\u4E00\u90E8\u3001\u9CE5\u539F\u65B0\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E5%8C%BA%E9%87%91%E5%B7%BB746%E2%80%903",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7031",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5927\u91CE\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5927\u91CE\u753A3140\u4E59",
      "area": "\u5927\u91CE\u753A\u306E\u4E00\u90E8\u3001\u9CE5\u539F\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%A4%A7%E9%87%8E%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%A4%A7%E9%87%8E%E7%94%BA3140%E4%B9%99",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7032",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u9ED2\u57FC\u5E02\u6C11\u4F1A\u9928",
      "address": "\u897F\u533A\u9CE5\u539F909\u20101",
      "area": "\u5317\u5834\u306E\u4E00\u90E8\u3001\u5584\u4E45\u3001\u7ACB\u4ECF\u306E\u4E00\u90E8\u3001\u9CE5\u539F\u306E\u4E00\u90E8\u3001\u5C71\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%B8%82%E6%B0%91%E4%BC%9A%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E9%B3%A5%E5%8E%9F909%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7033",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u5C71\u7530\u5C0F\u5B66\u6821",
      "address": "\u897F\u533A\u5C71\u75302781\u20102",
      "area": "\u7ACB\u4ECF\u306E\u4E00\u90E8\u3001\u9CE5\u539F\u306E\u4E00\u90E8\u3001\u5C71\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E5%B1%B1%E7%94%B0%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E5%8C%BA%E5%B1%B1%E7%94%B02781%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "7034",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "wardShort": "\u897F\u533A",
      "name": "\u9ED2\u57FC\u5317\u90E8\u516C\u6C11\u9928",
      "address": "\u897F\u533A\u3068\u304D\u3081\u304D\u897F4\u20101\u20101",
      "area": "\u7ACB\u4ECF\u306E\u4E00\u90E8\u3001\u5BFA\u5730\u3001\u3068\u304D\u3081\u304D\u897F1\uFF5E4\u4E01\u76EE\u3001\u3068\u304D\u3081\u304D\u67711\u4E01\u76EE\u3001\u5C71\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E5%8C%BA%20%E9%BB%92%E5%9F%BC%E5%8C%97%E9%83%A8%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E5%8C%BA%E3%81%A8%E3%81%8D%E3%82%81%E3%81%8D%E8%A5%BF4%E2%80%901%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8001",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5DFB\u5730\u533A\u516C\u6C11\u9928",
      "address": "\u897F\u84B2\u533A\u5DFB\u7532635",
      "area": "\u8D64\u93E5\u306E\u4E00\u90E8\u3001\u5DFB\u7532\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E5%9C%B0%E5%8C%BA%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B2635",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8002",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5DFB\u3064\u304F\u3057\u4FDD\u80B2\u5712",
      "address": "\u897F\u84B2\u533A\u5800\u5C71\u65B0\u7530256",
      "area": "\u5B89\u5C3B\u306E\u4E00\u90E8\u3001\u4E0B\u548C\u7D0D\u3001\u5800\u5C71\u65B0\u7530\u3001\u5DFB\u4E59",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E3%81%A4%E3%81%8F%E3%81%97%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%A0%80%E5%B1%B1%E6%96%B0%E7%94%B0256",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8003",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u84B2\u539F\u30AC\u30B9\u682A\u5F0F\u4F1A\u793E\u30B7\u30E7\u30FC\u30EB\u30FC\u30E0\u68DF",
      "address": "\u897F\u84B2\u533A\u5DFB\u7532\uFF14\uFF11\uFF11\uFF11",
      "area": "\u4E2D\u90F7\u5C4B\u3001\u8449\u8431\u5834\u3001\u5DFB\u7532\u306E\u4E00\u90E8\u3001\u5272\u524D\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%92%B2%E5%8E%9F%E3%82%AC%E3%82%B9%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%AB%E3%83%BC%E3%83%A0%E6%A3%9F%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B2%EF%BC%94%EF%BC%91%EF%BC%91%EF%BC%91",
      "updateInfo": "\u897F\u84B2\u533A\u5F79\u6240\u304B\u3089\u84B2\u539F\u30AC\u30B9\u682A\u5F0F\u4F1A\u793E\u30B7\u30E7\u30FC\u30EB\u30FC\u30E0\u68DF\u3078\u5909\u66F4",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8004",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5DFB\u5730\u57DF\u4FDD\u5065\u798F\u7949\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u84B2\u533A\u5DFB\u75324363",
      "area": "\u8D64\u93E5\u306E\u4E00\u90E8\u3001\u5B89\u5C3B\u306E\u4E00\u90E8\u3001\u6F5F\u982D\u306E\u4E00\u90E8\u3001\u5DFB\u7532\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E5%9C%B0%E5%9F%9F%E4%BF%9D%E5%81%A5%E7%A6%8F%E7%A5%89%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B24363",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8005",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5DFB\u3084\u3059\u3089\u304E\u4F1A\u9928",
      "address": "\u897F\u84B2\u533A\u5DFB\u7532121\u20101",
      "area": "\u7FBD\u7530\u3001\u6771\u6C70\u4E0A\u3001\u5DFB\u7532\u306E\u4E00\u90E8\u3001\u5272\u524D\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B7%BB%E3%82%84%E3%81%99%E3%82%89%E3%81%8E%E4%BC%9A%E9%A4%A8%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%BB%E7%94%B2121%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8006",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u6F06\u5C71\u897F\u4FDD\u80B2\u5712",
      "address": "\u897F\u84B2\u533A\u4E26\u5CA110\u20102",
      "area": "\u6F06\u5C71\u306E\u4E00\u90E8\u3001\u6F5F\u982D\u306E\u4E00\u90E8\u3001\u67FF\u5CF6\u3001\u6CB3\u4E95\u3001\u6804\u753A\u3001\u685C\u6797\u3001\u4E26\u5CA1\u3001\u99AC\u5800\u3001\u5C71\u5CF6",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%BC%86%E5%B1%B1%E8%A5%BF%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%B8%A6%E5%B2%A110%E2%80%902",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8007",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u6F06\u5C71\u6771\u4FDD\u80B2\u5712",
      "address": "\u897F\u84B2\u533A\u6F06\u5C713320",
      "area": "\u6F06\u5C71\u306E\u4E00\u90E8\u3001\u5DFB\u6771\u753A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%BC%86%E5%B1%B1%E6%9D%B1%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%BC%86%E5%B1%B13320",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8008",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u304B\u304D\u306E\u5B9F\u4FDD\u80B2\u5712",
      "address": "\u897F\u84B2\u533A\u4EC1\u7B871443\u20101",
      "area": "\u7AF9\u91CE\u753A\u3001\u7A32\u5CF6\u3001\u4EC1\u7B87\u3001\u5E03\u76EE\u3001\u4F0F\u90E8\u3001\u524D\u7530\u3001\u9DF2\u30CE\u6728\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E3%81%8B%E3%81%8D%E3%81%AE%E5%AE%9F%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%BB%81%E7%AE%871443%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8009",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5CF0\u5CA1\u516C\u6C11\u9928",
      "address": "\u897F\u84B2\u533A\u9DF2\u30CE\u67281633-9",
      "area": "\u4E0A\u6728\u5CF6\u3001\u4E94\u30B1\u6D5C\u3001\u4E0B\u6728\u5CF6\u3001\u5E73\u6CA2\u3001\u798F\u4E95\u3001\u821F\u6238\u3001\u677E\u90F7\u5C4B\u3001\u5CF0\u5CA1\u3001\u9DF2\u30CE\u6728\u306E\u4E00\u90E8\u3001\u89D2\u6D77\u6D5C",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B3%B0%E5%B2%A1%E5%85%AC%E6%B0%91%E9%A4%A8%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E9%B7%B2%E3%83%8E%E6%9C%A81633-9",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8010",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u677E\u91CE\u5C3E\u5730\u57DF\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u84B2\u533A\u677E\u91CE\u5C3E2852-3",
      "area": "\u65B0\u4FDD\u3001\u5DFB\u5927\u539F\u3001\u677E\u91CE\u5C3E\u3001\u677E\u5C71",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%9D%BE%E9%87%8E%E5%B0%BE%E5%9C%B0%E5%9F%9F%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%9D%BE%E9%87%8E%E5%B0%BE2852-3",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8011",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u89D2\u7530\u5730\u533A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u84B2\u533A\u89D2\u7530\u6D5C1815-1",
      "area": "\u8D8A\u524D\u6D5C\u3001\u89D2\u7530\u6D5C",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%A7%92%E7%94%B0%E5%9C%B0%E5%8C%BA%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E8%A7%92%E7%94%B0%E6%B5%9C1815-1",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8012",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5CA9\u5BA4\u8FB2\u6751\u74B0\u5883\u6539\u5584\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u84B2\u533A\u548C\u7D0D2\u201021\u20101",
      "area": "\u548C\u7D0D\u306E\u4E00\u90E8\u3001\u548C\u7D0D1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u548C\u7D0D2\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u548C\u7D0D3\u4E01\u76EE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E8%BE%B2%E6%9D%91%E7%92%B0%E5%A2%83%E6%94%B9%E5%96%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%92%8C%E7%B4%8D2%E2%80%9021%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8013",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u548C\u7D0D\u5C0F\u5B66\u6821",
      "address": "\u897F\u84B2\u533A\u548C\u7D0D1212",
      "area": "\u9AD8\u6A4B\u3001\u6D25\u96F2\u7530\u3001\u5BCC\u5CA1\u3001\u539F\u3001\u548C\u7D0D\u306E\u4E00\u90E8\u3001\u548C\u7D0D1\u4E01\u76EE\u306E\u4E00\u90E8\u3001\u548C\u7D0D2\u4E01\u76EE\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%92%8C%E7%B4%8D%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%92%8C%E7%B4%8D1212",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8014",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5CA9\u5BA4\u51FA\u5F35\u6240",
      "address": "\u897F\u84B2\u533A\u897F\u4E2D860",
      "area": "\u6CB9\u5CF6\u3001\u65B0\u8C37\u3001\u690D\u91CE\u65B0\u7530\u3001\u6F5F\u4E0A\u3001\u5317\u91CE\u3001\u767D\u9CE5\u3001\u9AD8\u7551\u3001\u590F\u4E95\u3001\u897F\u4E2D\u3001\u897F\u9577\u5CF6\u3001\u897F\u8239\u8D8A\u3001\u5357\u8C37\u5185\u3001\u6A2A\u66FD\u6839",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E8%A5%BF%E4%B8%AD860",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8015",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5CA9\u5BA4\u4FDD\u80B2\u5712",
      "address": "\u897F\u84B2\u533A\u6A4B\u672C101\u20101",
      "area": "\u77F3\u702C\u3001\u5CA9\u5BA4\u6E29\u6CC9\u3001\u91D1\u6C60\u3001\u4E45\u4FDD\u7530\u3001\u6804\u3001\u733F\u30F6\u702C\u3001\u6A4B\u672C\u3001\u6A0B\u66FD",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E4%BF%9D%E8%82%B2%E5%9C%92%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%A9%8B%E6%9C%AC101%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8016",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5CA9\u5BA4\u3059\u3053\u3084\u304B\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u84B2\u533A\u9593\u702C4290-1",
      "area": "\u9593\u702C",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%B2%A9%E5%AE%A4%E3%81%99%E3%81%93%E3%82%84%E3%81%8B%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E9%96%93%E7%80%AC4290-1",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8017",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u93A7\u90F7\u5C0F\u5B66\u6821",
      "address": "\u897F\u84B2\u533A\u5929\u7AFA\u5802412\u20104",
      "area": "\u5DDD\u5D0E\u306E\u4E00\u90E8\u3001\u771F\u7530\u3001\u4E0B\u5C71\u3001\u5929\u7AFA\u5802\u3001\u4E2D\u5CF6\u3001\u897F\u6C70\u4E0A\u3001\u69C7\u5CF6\u306E\u4E00\u90E8\u3001\u5E73\u91CE",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E9%8E%A7%E9%83%B7%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%A4%A9%E7%AB%BA%E5%A0%82412%E2%80%904",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8018",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u3044\u3053\u3044\u306E\u5BB6\u897F\u5DDD\u8358",
      "address": "\u897F\u84B2\u533A\u5DDD\u5D0E308\u20104",
      "area": "\u62BC\u4ED8\u306E\u4E00\u90E8\u3001\u5DDD\u5D0E\u306E\u4E00\u90E8\u3001\u9C78\u3001\u65D7\u5C4B\u306E\u4E00\u90E8\u3001\u69C7\u5CF6\u306E\u4E00\u90E8\u3001\u677E\u5D0E\u306E\u4E00\u90E8\u3001\u77E2\u5CF6",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E3%81%84%E3%81%93%E3%81%84%E3%81%AE%E5%AE%B6%E8%A5%BF%E5%B7%9D%E8%8D%98%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B7%9D%E5%B4%8E308%E2%80%904",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8019",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u897F\u5DDD\u51FA\u5F35\u6240",
      "address": "\u897F\u84B2\u533A\u65D7\u5C4B585\u20101",
      "area": "\u62BC\u4ED8\u306E\u4E00\u90E8\u3001\u66FD\u6839\u306E\u4E00\u90E8\u3001\u65D7\u5C4B\u306E\u4E00\u90E8\u3001\u677E\u5D0E\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%A5%BF%E5%B7%9D%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%97%97%E5%B1%8B585%E2%80%901",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8020",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u66FD\u6839\u5C0F\u5B66\u6821",
      "address": "\u897F\u84B2\u533A\u66FD\u6839750",
      "area": "\u6851\u5C71\u3001\u5584\u5149\u5BFA\u3001\u5584\u5149\u5BFA\u6751\u53D7\u3001\u66FD\u6839\u306E\u4E00\u90E8\u3001\u65D7\u5C4B\u6751\u53D7",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%9B%BD%E6%A0%B9%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%9B%BD%E6%A0%B9750",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8021",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5347\u6F5F\u5C0F\u5B66\u6821",
      "address": "\u897F\u84B2\u533A\u5347\u6F5F2179",
      "area": "\u6D66\u6751\u306E\u4E00\u90E8\u3001\u5927\u6F5F\u306E\u4E00\u90E8\u3001\u5927\u95A2\u306E\u4E00\u90E8\u3001\u5175\u53F3\u885B\u9580\u65B0\u7530\u306E\u4E00\u90E8\u3001\u5347\u6F5F\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%8D%87%E6%BD%9F%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%8D%87%E6%BD%9F2179",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8022",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u8C9D\u67C4\u5730\u533A\u96C6\u4F1A\u6240",
      "address": "\u897F\u84B2\u533A\u8C9D\u67C4805\u20106",
      "area": "\u6D66\u6751\u306E\u4E00\u90E8\u3001\u5927\u6F5F\u306E\u4E00\u90E8\u3001\u5927\u6F5F\u6751\u53E4\u65B0\u7530\u53D7\u3001\u5927\u95A2\u306E\u4E00\u90E8\u3001\u8C9D\u67C4\u3001\u8C9D\u67C4\u65B0\u7530\u3001\u4E09\u89D2\u91CE\u65B0\u7530\u3001\u5175\u53F3\u885B\u9580\u65B0\u7530\u306E\u4E00\u90E8\u3001\u5800\u4E0A\u65B0\u7530\u3001\u5347\u5CA1\u3001\u5347\u6F5F\u306E\u4E00\u90E8\u3001\u8207\u5175\u885B\u91CE\u65B0\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E8%B2%9D%E6%9F%84%E5%9C%B0%E5%8C%BA%E9%9B%86%E4%BC%9A%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E8%B2%9D%E6%9F%84805%E2%80%906",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8023",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u6F5F\u6771\u51FA\u5F35\u6240",
      "address": "\u897F\u84B2\u533A\u4E09\u65B91",
      "area": "\u4E95\u968F\u3001\u5927\u539F\u3001\u718A\u8C37\u3001\u4E09\u65B9\u3001\u756A\u5C4B\u3001\u5C71\u53E3\u65B0\u7530",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%BD%9F%E6%9D%B1%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%B8%89%E6%96%B91",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8024",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u6A2A\u6238\u96C6\u4F1A\u6240",
      "address": "\u897F\u84B2\u533A\u6A2A\u6238137",
      "area": "\u536F\u516B\u90CE\u53D7\u3001\u9060\u85E4\u3001\u6A2A\u6238",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E6%A8%AA%E6%88%B8%E9%9B%86%E4%BC%9A%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%A8%AA%E6%88%B8137",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8025",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u5927\u66FD\u6839\u96C6\u843D\u958B\u767A\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u84B2\u533A\u5927\u66FD\u68391298",
      "area": "\u8328\u5CF6\u3001\u4ECA\u4E95\u3001\u5927\u66FD\u6839\u3001\u56FD\u898B\u3001\u79F0\u540D\u3001\u7F8E\u91CC\u3001\u5357",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E5%A4%A7%E6%9B%BD%E6%A0%B9%E9%9B%86%E8%90%BD%E9%96%8B%E7%99%BA%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%A4%A7%E6%9B%BD%E6%A0%B91298",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8026",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u4E94\u4E4B\u4E0A\u3075\u308C\u3042\u3044\u30BB\u30F3\u30BF\u30FC",
      "address": "\u897F\u84B2\u533A\u4E94\u4E4B\u4E0A253",
      "area": "\u4E94\u4E4B\u4E0A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%BA%94%E4%B9%8B%E4%B8%8A%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%BA%94%E4%B9%8B%E4%B8%8A253",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8027",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u4E2D\u4E4B\u53E3\u6771\u5C0F\u5B66\u6821",
      "address": "\u897F\u84B2\u533A\u5C0F\u54091100",
      "area": "\u6F5F\u6D66\u65B0\u3001\u4E0A\u5C0F\u5409\u3001\u9AD8\u91CE\u5BAE\u3001\u5C0F\u5409\u306E\u4E00\u90E8\u3001\u4E2D\u4E4B\u53E3\u306E\u4E00\u90E8\u3001\u9577\u5834\u3001\u91DD\u30F6\u66FD\u6839\u3001\u6771\u5C0F\u5409\u3001\u6771\u4E2D\u3001\u516D\u5206\u3001\u9580\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%B8%AD%E4%B9%8B%E5%8F%A3%E6%9D%B1%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E5%B0%8F%E5%90%891100",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8028",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u4E2D\u4E4B\u53E3\u51FA\u5F35\u6240",
      "address": "\u897F\u84B2\u533A\u4E2D\u4E4B\u53E3626",
      "area": "\u59E5\u5CF6\u3001\u5C0F\u5409\u306E\u4E00\u90E8\u3001\u4E2D\u4E4B\u53E3\u306E\u4E00\u90E8\u3001\u7FBD\u9ED2\u3001\u6771\u8239\u8D8A\u3001\u798F\u5CF6\u306E\u4E00\u90E8\u3001\u771F\u6728\u3001\u9580\u7530\u306E\u4E00\u90E8",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%B8%AD%E4%B9%8B%E5%8F%A3%E5%87%BA%E5%BC%B5%E6%89%80%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E4%B8%AD%E4%B9%8B%E5%8F%A3626",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "8029",
      "ward": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "wardShort": "\u897F\u84B2\u533A",
      "name": "\u4E2D\u4E4B\u53E3\u897F\u5C0F\u5B66\u6821",
      "address": "\u897F\u84B2\u533A\u6253\u8D8A\u7532244",
      "area": "\u6253\u8D8A\u3001\u6CB3\u9593\u3001\u9053\u4E0A\u3001\u798F\u5CF6\u306E\u4E00\u90E8\u3001\u7267\u30F6\u5CF6\u3001\u4E09\u30C4\u9580",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E6%BD%9F%E5%B8%82%E8%A5%BF%E8%92%B2%E5%8C%BA%20%E4%B8%AD%E4%B9%8B%E5%8F%A3%E8%A5%BF%E5%B0%8F%E5%AD%A6%E6%A0%A1%20%E8%A5%BF%E8%92%B2%E5%8C%BA%E6%89%93%E8%B6%8A%E7%94%B2244",
      "updateInfo": "",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u6F5F\u5E02\u897F\u84B2\u533A",
      "officialUrl": "https://www.city.niigata.lg.jp/shisei/senkyo/tohyo/tohyojo.html"
    },
    {
      "id": "N01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u5F79\u6240 \u30A2\u30AA\u30FC\u30EC\u9577\u5CA1",
      "address": "\u9577\u5CA1\u5E02\u5927\u624B\u901A1-4-10",
      "area": "\u5927\u624B\u901A\u30FB\u9577\u5CA1\u99C5\u524D\u30FB\u8868\u753A\u30FB\u6BBF\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%BD%B9%E6%89%80%20%E3%82%A2%E3%82%AA%E3%83%BC%E3%83%AC%E9%95%B7%E5%B2%A1%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%A4%A7%E6%89%8B%E9%80%9A1-4-10",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u7ACB\u5287\u5834",
      "address": "\u9577\u5CA1\u5E02\u5E78\u753A2-1-2",
      "area": "\u5E78\u753A\u30FB\u5343\u624B\u30FB\u95A2\u539F\u30FB\u53F0\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E7%AB%8B%E5%8A%87%E5%A0%B4%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B9%B8%E7%94%BA2-1-2",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N03",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u5317\u90E8\u4F53\u80B2\u9928",
      "address": "\u9577\u5CA1\u5E02\u6771\u8535\u738B2-2-72",
      "area": "\u8535\u738B\u30FB\u795E\u8C37\u30FB\u65B0\u4FDD\u30FB\u4ECA\u4E95\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%8C%97%E9%83%A8%E4%BD%93%E8%82%B2%E9%A4%A8%20%E9%95%B7%E5%B2%A1%E5%B8%82%E6%9D%B1%E8%94%B5%E7%8E%8B2-2-72",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N04",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u5357\u90E8\u4F53\u80B2\u9928",
      "address": "\u9577\u5CA1\u5E02\u5B66\u6821\u753A3-2-29",
      "area": "\u5B66\u6821\u753A\u30FB\u60A0\u4E45\u5C71\u30FB\u6816\u5409\u30FB\u4E2D\u5CF6\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%8D%97%E9%83%A8%E4%BD%93%E8%82%B2%E9%A4%A8%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%AD%A6%E6%A0%A1%E7%94%BA3-2-29",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N05",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u8D8A\u8DEF\u652F\u6240",
      "address": "\u9577\u5CA1\u5E02\u6D66715",
      "area": "\u8D8A\u8DEF\u5730\u533A\uFF08\u6D66\u30FB\u6765\u8FCE\u5BFA\u30FB\u585A\u91CE\u5C71\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E8%B6%8A%E8%B7%AF%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E6%B5%A6715",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N06",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u6803\u5C3E\u652F\u6240",
      "address": "\u9577\u5CA1\u5E02\u91D1\u753A2-1-5",
      "area": "\u6803\u5C3E\u5730\u533A\uFF08\u8C37\u5185\u30FB\u79CB\u8449\u30FB\u6771\u8C37\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E6%A0%83%E5%B0%BE%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E9%87%91%E7%94%BA2-1-5",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N07",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u5BFA\u6CCA\u652F\u6240",
      "address": "\u9577\u5CA1\u5E02\u5BFA\u6CCA\u5DDD\u5D0E4798-1",
      "area": "\u5BFA\u6CCA\u5730\u533A\uFF08\u6E2F\u753A\u30FB\u5927\u91CE\u30FB\u91CE\u7A4D\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%AF%BA%E6%B3%8A%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%AF%BA%E6%B3%8A%E5%B7%9D%E5%B4%8E4798-1",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N08",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u4E2D\u4E4B\u5CF6\u652F\u6240",
      "address": "\u9577\u5CA1\u5E02\u4E2D\u4E4B\u5CF6844",
      "area": "\u4E2D\u4E4B\u5CF6\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E4%B8%AD%E4%B9%8B%E5%B3%B6%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E4%B8%AD%E4%B9%8B%E5%B3%B6844",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N09",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u5C71\u53E4\u5FD7\u652F\u6240",
      "address": "\u9577\u5CA1\u5E02\u5C71\u53E4\u5FD7\u7AF9\u6CA23610",
      "area": "\u5C71\u53E4\u5FD7\u5730\u533A\uFF08\u7AF9\u6CA2\u30FB\u7A2E\u3059\u306F\u30FB\u6CB9\u592B\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B1%B1%E5%8F%A4%E5%BF%97%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B1%B1%E5%8F%A4%E5%BF%97%E7%AB%B9%E6%B2%A23610",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "N10",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9577\u5CA1\u5E02",
      "name": "\u9577\u5CA1\u5E02\u5DDD\u53E3\u652F\u6240",
      "address": "\u9577\u5CA1\u5E02\u5DDD\u53E3\u5DDD\u53E31974-26",
      "area": "\u5DDD\u53E3\u5730\u533A\uFF08\u6771\u5DDD\u53E3\u30FB\u548C\u5357\u6D25\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E5%B2%A1%E5%B8%82%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B7%9D%E5%8F%A3%E6%94%AF%E6%89%80%20%E9%95%B7%E5%B2%A1%E5%B8%82%E5%B7%9D%E5%8F%A3%E5%B7%9D%E5%8F%A31974-26",
      "officialUrl": "https://www.city.nagaoka.niigata.jp/shisei/cate04/senkyo/touhyoujo.html"
    },
    {
      "id": "SJ01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u4E09\u6761\u5E02",
      "name": "\u4E09\u6761\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u4E09\u6761\u5E02\u65ED\u753A2-3-1",
      "area": "\u4E09\u6761\u4E2D\u5FC3\u90E8\u30FB\u672C\u753A\u30FB\u65ED\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%97%AD%E7%94%BA2-3-1",
      "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
    },
    {
      "id": "SJ02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u4E09\u6761\u5E02",
      "name": "\u4E09\u6761\u5E02\u539A\u751F\u798F\u7949\u4F1A\u9928",
      "address": "\u4E09\u6761\u5E02\u672C\u753A1-4-1",
      "area": "\u4E00\u30CE\u6728\u6238\u30FB\u6771\u4E09\u6761\u30FB\u5CF6\u7530\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E5%8E%9A%E7%94%9F%E7%A6%8F%E7%A5%89%E4%BC%9A%E9%A4%A8%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%9C%AC%E7%94%BA1-4-1",
      "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
    },
    {
      "id": "SJ03",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u4E09\u6761\u5E02",
      "name": "\u4E09\u6761\u5E02\u6804\u5E81\u820E",
      "address": "\u4E09\u6761\u5E02\u65B0\u58001311",
      "area": "\u6804\u5730\u533A\uFF08\u65B0\u5800\u30FB\u5927\u9762\u30FB\u5317\u5165\u8535\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%A0%84%E5%BA%81%E8%88%8E%20%E4%B8%89%E6%9D%A1%E5%B8%82%E6%96%B0%E5%A0%801311",
      "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
    },
    {
      "id": "SJ04",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u4E09\u6761\u5E02",
      "name": "\u4E09\u6761\u5E02\u4E0B\u7530\u5E81\u820E",
      "address": "\u4E09\u6761\u5E02\u837B\u5800830-1",
      "area": "\u4E0B\u7530\u5730\u533A\uFF08\u837B\u5800\u30FB\u9577\u91CE\u30FB\u8352\u6CA2\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E6%9D%A1%E5%B8%82%20%E4%B8%89%E6%9D%A1%E5%B8%82%E4%B8%8B%E7%94%B0%E5%BA%81%E8%88%8E%20%E4%B8%89%E6%9D%A1%E5%B8%82%E8%8D%BB%E5%A0%80830-1",
      "officialUrl": "https://www.city.sanjo.niigata.jp/soshiki/senkyokanriinkaijimukyoku/senkyoseido/touhyou/15316.html"
    },
    {
      "id": "KZ01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u67CF\u5D0E\u5E02",
      "name": "\u67CF\u5D0E\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u67CF\u5D0E\u5E02\u65E5\u77F3\u753A2-1",
      "area": "\u67CF\u5D0E\u99C5\u524D\u30FB\u65E5\u77F3\u753A\u30FB\u4E2D\u592E\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E6%97%A5%E7%9F%B3%E7%94%BA2-1",
      "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
    },
    {
      "id": "KZ02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u67CF\u5D0E\u5E02",
      "name": "\u67CF\u5D0E\u5E02\u6587\u5316\u4F1A\u9928 \u30A2\u30EB\u30D5\u30A9\u30FC\u30EC",
      "address": "\u67CF\u5D0E\u5E02\u65E5\u77F3\u753A4-32",
      "area": "\u6771\u672C\u753A\u30FB\u8ACF\u8A2A\u753A\u30FB\u93E1\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E6%96%87%E5%8C%96%E4%BC%9A%E9%A4%A8%20%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AC%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E6%97%A5%E7%9F%B3%E7%94%BA4-32",
      "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
    },
    {
      "id": "KZ03",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u67CF\u5D0E\u5E02",
      "name": "\u67CF\u5D0E\u5E02\u897F\u5DDD\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u67CF\u5D0E\u5E02\u897F\u5C71\u753A\u5999\u6CD5\u5BFA348",
      "area": "\u897F\u5C71\u5730\u533A\uFF08\u897F\u5C71\u30FB\u5999\u6CD5\u5BFA\u30FB\u4E8C\u7530\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E8%A5%BF%E5%B7%9D%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E8%A5%BF%E5%B1%B1%E7%94%BA%E5%A6%99%E6%B3%95%E5%AF%BA348",
      "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
    },
    {
      "id": "KZ04",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u67CF\u5D0E\u5E02",
      "name": "\u9AD8\u7530\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u67CF\u5D0E\u5E02\u5C71\u4E0A465",
      "area": "\u9AD8\u7530\u30FB\u8352\u6D5C\u30FB\u677E\u6CE2\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9F%8F%E5%B4%8E%E5%B8%82%20%E9%AB%98%E7%94%B0%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E6%9F%8F%E5%B4%8E%E5%B8%82%E5%B1%B1%E4%B8%8A465",
      "officialUrl": "https://www.city.kashiwazaki.lg.jp/soshiki/senkyo/senkyo/1/6530.html"
    },
    {
      "id": "TB01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u71D5\u5E02",
      "name": "\u71D5\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u71D5\u5E02\u5409\u7530\u897F\u592A\u75301934",
      "area": "\u897F\u592A\u7530\u30FB\u5409\u7530\u4E2D\u5FC3\u90E8\u30FB\u7C9F\u751F\u6D25\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%87%95%E5%B8%82%20%E7%87%95%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E7%87%95%E5%B8%82%E5%90%89%E7%94%B0%E8%A5%BF%E5%A4%AA%E7%94%B01934",
      "officialUrl": "https://www.city.tsubame.niigata.jp/soshiki/senkyokanriinkaijimukyoku/touhyouseido/5529.html"
    },
    {
      "id": "TB02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u71D5\u5E02",
      "name": "\u71D5\u5E02\u7DCF\u5408\u6587\u5316\u30BB\u30F3\u30BF\u30FC",
      "address": "\u71D5\u5E02\u5927\u66F23015",
      "area": "\u71D5\u5730\u533A\uFF08\u4E2D\u592E\u901A\u30FB\u79CB\u6D25\u30FB\u5927\u66F2\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%87%95%E5%B8%82%20%E7%87%95%E5%B8%82%E7%B7%8F%E5%90%88%E6%96%87%E5%8C%96%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E7%87%95%E5%B8%82%E5%A4%A7%E6%9B%B23015",
      "officialUrl": "https://www.city.tsubame.niigata.jp/soshiki/senkyokanriinkaijimukyoku/touhyouseido/5529.html"
    },
    {
      "id": "TB03",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u71D5\u5E02",
      "name": "\u71D5\u5E02\u5206\u6C34\u516C\u6C11\u9928",
      "address": "\u71D5\u5E02\u5206\u6C34\u65B0\u753A2-5-1",
      "area": "\u5206\u6C34\u5730\u533A\uFF08\u5206\u6C34\u30FB\u5730\u8535\u5802\u30FB\u6E21\u90E8\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%87%95%E5%B8%82%20%E7%87%95%E5%B8%82%E5%88%86%E6%B0%B4%E5%85%AC%E6%B0%91%E9%A4%A8%20%E7%87%95%E5%B8%82%E5%88%86%E6%B0%B4%E6%96%B0%E7%94%BA2-5-1",
      "officialUrl": "https://www.city.tsubame.niigata.jp/soshiki/senkyokanriinkaijimukyoku/touhyouseido/5529.html"
    },
    {
      "id": "TK01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5341\u65E5\u753A\u5E02",
      "name": "\u5341\u65E5\u753A\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u5341\u65E5\u753A\u5E02\u5343\u6B73\u753A3-3",
      "area": "\u5341\u65E5\u753A\u4E2D\u5FC3\u90E8\u30FB\u5343\u6B73\u753A\u30FB\u672C\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%8D%83%E6%AD%B3%E7%94%BA3-3",
      "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
    },
    {
      "id": "TK02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5341\u65E5\u753A\u5E02",
      "name": "\u5341\u65E5\u753A\u5E02\u5DDD\u897F\u652F\u6240",
      "address": "\u5341\u65E5\u753A\u5E02\u5C0F\u9ED2\u6CA2\u30A4129-1",
      "area": "\u5DDD\u897F\u5730\u533A\uFF08\u4E0A\u540D\u5E02\u30FB\u5C0F\u9ED2\u6CA2\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%B7%9D%E8%A5%BF%E6%94%AF%E6%89%80%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E5%B0%8F%E9%BB%92%E6%B2%A2%E3%82%A4129-1",
      "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
    },
    {
      "id": "TK03",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5341\u65E5\u753A\u5E02",
      "name": "\u5341\u65E5\u753A\u5E02\u677E\u4EE3\u652F\u6240",
      "address": "\u5341\u65E5\u753A\u5E02\u677E\u4EE33926-1",
      "area": "\u677E\u4EE3\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%BB%A3%E6%94%AF%E6%89%80%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%BB%A33926-1",
      "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
    },
    {
      "id": "TK04",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5341\u65E5\u753A\u5E02",
      "name": "\u5341\u65E5\u753A\u5E02\u677E\u4E4B\u5C71\u652F\u6240",
      "address": "\u5341\u65E5\u753A\u5E02\u677E\u4E4B\u5C711104",
      "area": "\u677E\u4E4B\u5C71\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%B9%8B%E5%B1%B1%E6%94%AF%E6%89%80%20%E5%8D%81%E6%97%A5%E7%94%BA%E5%B8%82%E6%9D%BE%E4%B9%8B%E5%B1%B11104",
      "officialUrl": "https://www.city.tokamachi.lg.jp/soshiki/senkyokanriinkai/"
    },
    {
      "id": "MU01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5357\u9B5A\u6CBC\u5E02",
      "name": "\u5357\u9B5A\u6CBC\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u5357\u9B5A\u6CBC\u5E02\u516D\u65E5\u753A180-1",
      "area": "\u516D\u65E5\u753A\u4E2D\u5FC3\u90E8\u30FB\u5742\u6238\u30FB\u5DDD\u7AAA\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%85%AD%E6%97%A5%E7%94%BA180-1",
      "officialUrl": "https://www.city.minamiuonuma.niigata.jp/"
    },
    {
      "id": "MU02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5357\u9B5A\u6CBC\u5E02",
      "name": "\u5357\u9B5A\u6CBC\u5E02\u5869\u6CA2\u5E81\u820E",
      "address": "\u5357\u9B5A\u6CBC\u5E02\u5869\u6CA21371-1",
      "area": "\u5869\u6CA2\u5730\u533A\uFF08\u5869\u6CA2\u30FB\u77F3\u6253\u30FB\u821E\u5B50\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A1%A9%E6%B2%A2%E5%BA%81%E8%88%8E%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A1%A9%E6%B2%A21371-1",
      "officialUrl": "https://www.city.minamiuonuma.niigata.jp/"
    },
    {
      "id": "MU03",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5357\u9B5A\u6CBC\u5E02",
      "name": "\u5357\u9B5A\u6CBC\u5E02\u5927\u548C\u5E81\u820E",
      "address": "\u5357\u9B5A\u6CBC\u5E02\u6D66\u4F501185-1",
      "area": "\u5927\u548C\u5730\u533A\uFF08\u6D66\u4F50\u30FB\u516B\u8272\u30FB\u4E94\u65E5\u753A\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A4%A7%E5%92%8C%E5%BA%81%E8%88%8E%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E5%B8%82%E6%B5%A6%E4%BD%901185-1",
      "officialUrl": "https://www.city.minamiuonuma.niigata.jp/"
    },
    {
      "id": "UO01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9B5A\u6CBC\u5E02",
      "name": "\u9B5A\u6CBC\u5E02\u5F79\u6240 \u5C0F\u51FA\u5E81\u820E",
      "address": "\u9B5A\u6CBC\u5E02\u5C0F\u51FA\u5CF6910",
      "area": "\u5C0F\u51FA\u5730\u533A\uFF08\u5C0F\u51FA\u5CF6\u30FB\u56DB\u65E5\u753A\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%BD%B9%E6%89%80%20%E5%B0%8F%E5%87%BA%E5%BA%81%E8%88%8E%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%B0%8F%E5%87%BA%E5%B3%B6910",
      "officialUrl": "https://www.city.uonuma.niigata.jp/"
    },
    {
      "id": "UO02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9B5A\u6CBC\u5E02",
      "name": "\u9B5A\u6CBC\u5E02\u5800\u4E4B\u5185\u5E81\u820E",
      "address": "\u9B5A\u6CBC\u5E02\u5800\u4E4B\u5185130",
      "area": "\u5800\u4E4B\u5185\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A0%80%E4%B9%8B%E5%86%85%E5%BA%81%E8%88%8E%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%A0%80%E4%B9%8B%E5%86%85130",
      "officialUrl": "https://www.city.uonuma.niigata.jp/"
    },
    {
      "id": "UO03",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u9B5A\u6CBC\u5E02",
      "name": "\u9B5A\u6CBC\u5E02\u5165\u5E83\u702C\u5E81\u820E",
      "address": "\u9B5A\u6CBC\u5E02\u7A74\u6CA2215-1",
      "area": "\u5165\u5E83\u702C\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%AD%9A%E6%B2%BC%E5%B8%82%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E5%85%A5%E5%BA%83%E7%80%AC%E5%BA%81%E8%88%8E%20%E9%AD%9A%E6%B2%BC%E5%B8%82%E7%A9%B4%E6%B2%A2215-1",
      "officialUrl": "https://www.city.uonuma.niigata.jp/"
    },
    {
      "id": "OJ01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5C0F\u5343\u8C37\u5E02",
      "name": "\u5C0F\u5343\u8C37\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u5C0F\u5343\u8C37\u5E02\u57CE\u51852-7-5",
      "area": "\u5C0F\u5343\u8C37\u5E02\u4E2D\u5FC3\u90E8\u30FB\u57CE\u5185\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%20%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%E5%9F%8E%E5%86%852-7-5",
      "officialUrl": "https://www.city.ojiya.niigata.jp/soshiki/senkan/"
    },
    {
      "id": "OJ02",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5C0F\u5343\u8C37\u5E02",
      "name": "\u7247\u8C9D\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30BB\u30F3\u30BF\u30FC",
      "address": "\u5C0F\u5343\u8C37\u5E02\u7247\u8C9D\u753A4940-1",
      "area": "\u7247\u8C9D\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%20%E7%89%87%E8%B2%9D%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%83%86%E3%82%A3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E5%B0%8F%E5%8D%83%E8%B0%B7%E5%B8%82%E7%89%87%E8%B2%9D%E7%94%BA4940-1",
      "officialUrl": "https://www.city.ojiya.niigata.jp/soshiki/senkan/"
    },
    {
      "id": "MT01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u898B\u9644\u5E02",
      "name": "\u898B\u9644\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u898B\u9644\u5E02\u662D\u548C\u753A2-1-1",
      "area": "\u898B\u9644\u5E02\u4E2D\u5FC3\u90E8\u30FB\u662D\u548C\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%A6%8B%E9%99%84%E5%B8%82%20%E8%A6%8B%E9%99%84%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E8%A6%8B%E9%99%84%E5%B8%82%E6%98%AD%E5%92%8C%E7%94%BA2-1-1",
      "officialUrl": "https://www.city.mitsuke.niigata.jp/"
    },
    {
      "id": "KM01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u52A0\u8302\u5E02",
      "name": "\u52A0\u8302\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u52A0\u8302\u5E02\u5E78\u753A2-3-5",
      "area": "\u52A0\u8302\u5E02\u4E2D\u5FC3\u90E8\u30FB\u99C5\u524D\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%8A%A0%E8%8C%82%E5%B8%82%20%E5%8A%A0%E8%8C%82%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%8A%A0%E8%8C%82%E5%B8%82%E5%B9%B8%E7%94%BA2-3-5",
      "officialUrl": "https://www.city.kamo.niigata.jp/"
    },
    {
      "id": "TG01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u7530\u4E0A\u753A",
      "name": "\u7530\u4E0A\u753A\u5F79\u5834",
      "address": "\u5357\u84B2\u539F\u90E1\u7530\u4E0A\u753A\u539F\u30F6\u5D0E\u65B0\u7530J1",
      "area": "\u7530\u4E0A\u753A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E4%B8%8A%E7%94%BA%20%E7%94%B0%E4%B8%8A%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E5%8D%97%E8%92%B2%E5%8E%9F%E9%83%A1%E7%94%B0%E4%B8%8A%E7%94%BA%E5%8E%9F%E3%83%B6%E5%B4%8E%E6%96%B0%E7%94%B0J1",
      "officialUrl": "https://www.town.tagami.niigata.jp/"
    },
    {
      "id": "IZ01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u51FA\u96F2\u5D0E\u753A",
      "name": "\u51FA\u96F2\u5D0E\u753A\u5F79\u5834",
      "address": "\u4E09\u5CF6\u90E1\u51FA\u96F2\u5D0E\u753A\u7C73\u7530142",
      "area": "\u51FA\u96F2\u5D0E\u753A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%87%BA%E9%9B%B2%E5%B4%8E%E7%94%BA%20%E5%87%BA%E9%9B%B2%E5%B4%8E%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E4%B8%89%E5%B3%B6%E9%83%A1%E5%87%BA%E9%9B%B2%E5%B4%8E%E7%94%BA%E7%B1%B3%E7%94%B0142",
      "officialUrl": "https://www.town.izumozaki.niigata.jp/"
    },
    {
      "id": "YZ01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u6E6F\u6CA2\u753A",
      "name": "\u6E6F\u6CA2\u753A\u5F79\u5834",
      "address": "\u5357\u9B5A\u6CBC\u90E1\u6E6F\u6CA2\u753A\u795E\u7ACB300",
      "area": "\u6E6F\u6CA2\u753A\u5168\u57DF\uFF08\u795E\u7ACB\u30FB\u8D8A\u5F8C\u6E6F\u6CA2\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E6%B2%A2%E7%94%BA%20%E6%B9%AF%E6%B2%A2%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E5%8D%97%E9%AD%9A%E6%B2%BC%E9%83%A1%E6%B9%AF%E6%B2%A2%E7%94%BA%E7%A5%9E%E7%AB%8B300",
      "officialUrl": "https://www.town.yuzawa.lg.jp/"
    },
    {
      "id": "TN01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u6D25\u5357\u753A",
      "name": "\u6D25\u5357\u753A\u5F79\u5834",
      "address": "\u4E2D\u9B5A\u6CBC\u90E1\u6D25\u5357\u753A\u4E0B\u8239\u6E21\u620A585",
      "area": "\u6D25\u5357\u753A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%B4%A5%E5%8D%97%E7%94%BA%20%E6%B4%A5%E5%8D%97%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E4%B8%AD%E9%AD%9A%E6%B2%BC%E9%83%A1%E6%B4%A5%E5%8D%97%E7%94%BA%E4%B8%8B%E8%88%B9%E6%B8%A1%E6%88%8A585",
      "officialUrl": "https://town.tsunan.niigata.jp/"
    },
    {
      "id": "KW01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5208\u7FBD\u6751",
      "name": "\u5208\u7FBD\u6751\u5F79\u5834",
      "address": "\u5208\u7FBD\u90E1\u5208\u7FBD\u6751\u5272\u753A\u65B0\u7530100",
      "area": "\u5208\u7FBD\u6751\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%88%88%E7%BE%BD%E6%9D%91%20%E5%88%88%E7%BE%BD%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E5%88%88%E7%BE%BD%E9%83%A1%E5%88%88%E7%BE%BD%E6%9D%91%E5%89%B2%E7%94%BA%E6%96%B0%E7%94%B0100",
      "officialUrl": "https://www.vill.kariwa.niigata.jp/"
    },
    {
      "id": "YH01",
      "region": "\u4E2D\u8D8A",
      "municipality": "\u5F25\u5F66\u6751",
      "name": "\u5F25\u5F66\u6751\u5F79\u5834",
      "address": "\u897F\u84B2\u539F\u90E1\u5F25\u5F66\u6751\u5927\u5B57\u77E2\u4F5C2865-1",
      "area": "\u5F25\u5F66\u6751\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%BC%A5%E5%BD%A6%E6%9D%91%20%E5%BC%A5%E5%BD%A6%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E8%A5%BF%E8%92%B2%E5%8E%9F%E9%83%A1%E5%BC%A5%E5%BD%A6%E6%9D%91%E5%A4%A7%E5%AD%97%E7%9F%A2%E4%BD%9C2865-1",
      "officialUrl": "http://www.vill.yahiko.niigata.jp/"
    },
    {
      "id": "JO01",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u4E0A\u8D8A\u5E02",
      "name": "\u4E0A\u8D8A\u5E02\u5F79\u6240 \u6728\u7530\u5E81\u820E",
      "address": "\u4E0A\u8D8A\u5E02\u6728\u75301-1-3",
      "area": "\u6625\u65E5\u5C71\u30FB\u6728\u7530\u30FB\u76F4\u6C5F\u6D25\u5357\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%A8%E7%94%B0%E5%BA%81%E8%88%8E%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E6%9C%A8%E7%94%B01-1-3",
      "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
    },
    {
      "id": "JO02",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u4E0A\u8D8A\u5E02",
      "name": "\u9AD8\u7530\u5730\u533A\u516C\u6C11\u9928",
      "address": "\u4E0A\u8D8A\u5E02\u672C\u753A3-2-26",
      "area": "\u9AD8\u7530\u672C\u753A\u30FB\u57CE\u4E0B\u753A\u30FB\u5927\u624B\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E9%AB%98%E7%94%B0%E5%9C%B0%E5%8C%BA%E5%85%AC%E6%B0%91%E9%A4%A8%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E6%9C%AC%E7%94%BA3-2-26",
      "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
    },
    {
      "id": "JO03",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u4E0A\u8D8A\u5E02",
      "name": "\u76F4\u6C5F\u6D25\u5B66\u3073\u306E\u4EA4\u6D41\u9928",
      "address": "\u4E0A\u8D8A\u5E02\u4E2D\u592E2-3-5",
      "area": "\u76F4\u6C5F\u6D25\u6E2F\u30FB\u6E2F\u753A\u30FB\u4E2D\u592E\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E7%9B%B4%E6%B1%9F%E6%B4%A5%E5%AD%A6%E3%81%B3%E3%81%AE%E4%BA%A4%E6%B5%81%E9%A4%A8%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E4%B8%AD%E5%A4%AE2-3-5",
      "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
    },
    {
      "id": "JO04",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u4E0A\u8D8A\u5E02",
      "name": "\u67FF\u5D0E\u533A\u7DCF\u5408\u4E8B\u52D9\u6240",
      "address": "\u4E0A\u8D8A\u5E02\u67FF\u5D0E\u533A\u67FF\u5D0E640",
      "area": "\u67FF\u5D0E\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E6%9F%BF%E5%B4%8E%E5%8C%BA%E7%B7%8F%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E6%9F%BF%E5%B4%8E%E5%8C%BA%E6%9F%BF%E5%B4%8E640",
      "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
    },
    {
      "id": "JO05",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u4E0A\u8D8A\u5E02",
      "name": "\u9838\u57CE\u533A\u7DCF\u5408\u4E8B\u52D9\u6240",
      "address": "\u4E0A\u8D8A\u5E02\u9838\u57CE\u533A\u767E\u9593\u753A716",
      "area": "\u9838\u57CE\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E9%A0%B8%E5%9F%8E%E5%8C%BA%E7%B7%8F%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E9%A0%B8%E5%9F%8E%E5%8C%BA%E7%99%BE%E9%96%93%E7%94%BA716",
      "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
    },
    {
      "id": "JO06",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u4E0A\u8D8A\u5E02",
      "name": "\u5B89\u585A\u533A\u7DCF\u5408\u4E8B\u52D9\u6240",
      "address": "\u4E0A\u8D8A\u5E02\u5B89\u585A\u533A\u5B89\u585A722",
      "area": "\u5B89\u585A\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%B8%8A%E8%B6%8A%E5%B8%82%20%E5%AE%89%E5%A1%9A%E5%8C%BA%E7%B7%8F%E5%90%88%E4%BA%8B%E5%8B%99%E6%89%80%20%E4%B8%8A%E8%B6%8A%E5%B8%82%E5%AE%89%E5%A1%9A%E5%8C%BA%E5%AE%89%E5%A1%9A722",
      "officialUrl": "https://www.city.joetsu.niigata.jp/soshiki/senkan/touhyoujo-ichiran.html"
    },
    {
      "id": "IT01",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u7CF8\u9B5A\u5DDD\u5E02",
      "name": "\u7CF8\u9B5A\u5DDD\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u7CF8\u9B5A\u5DDD\u5E02\u4E00\u306E\u5BAE1-2-1",
      "area": "\u7CF8\u9B5A\u5DDD\u99C5\u524D\u30FB\u4E00\u306E\u5BAE\u30FB\u5BFA\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E4%B8%80%E3%81%AE%E5%AE%AE1-2-1",
      "officialUrl": "https://www.city.itoigawa.lg.jp/"
    },
    {
      "id": "IT02",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u7CF8\u9B5A\u5DDD\u5E02",
      "name": "\u7CF8\u9B5A\u5DDD\u5E02\u80FD\u751F\u4E8B\u52D9\u6240",
      "address": "\u7CF8\u9B5A\u5DDD\u5E02\u5927\u5B57\u80FD\u751F7565",
      "area": "\u80FD\u751F\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E8%83%BD%E7%94%9F%E4%BA%8B%E5%8B%99%E6%89%80%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E5%A4%A7%E5%AD%97%E8%83%BD%E7%94%9F7565",
      "officialUrl": "https://www.city.itoigawa.lg.jp/"
    },
    {
      "id": "IT03",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u7CF8\u9B5A\u5DDD\u5E02",
      "name": "\u7CF8\u9B5A\u5DDD\u5E02\u9752\u6D77\u4E8B\u52D9\u6240",
      "address": "\u7CF8\u9B5A\u5DDD\u5E02\u5927\u5B57\u9752\u6D774613-1",
      "area": "\u9752\u6D77\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E9%9D%92%E6%B5%B7%E4%BA%8B%E5%8B%99%E6%89%80%20%E7%B3%B8%E9%AD%9A%E5%B7%9D%E5%B8%82%E5%A4%A7%E5%AD%97%E9%9D%92%E6%B5%B74613-1",
      "officialUrl": "https://www.city.itoigawa.lg.jp/"
    },
    {
      "id": "MY01",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u5999\u9AD8\u5E02",
      "name": "\u5999\u9AD8\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u5999\u9AD8\u5E02\u6804\u753A5-1",
      "area": "\u65B0\u4E95\u4E2D\u5FC3\u90E8\u30FB\u6804\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%A6%99%E9%AB%98%E5%B8%82%20%E5%A6%99%E9%AB%98%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E5%A6%99%E9%AB%98%E5%B8%82%E6%A0%84%E7%94%BA5-1",
      "officialUrl": "https://www.city.myoko.niigata.jp/"
    },
    {
      "id": "MY02",
      "region": "\u4E0A\u8D8A",
      "municipality": "\u5999\u9AD8\u5E02",
      "name": "\u5999\u9AD8\u9AD8\u539F\u30E1\u30C3\u30BB",
      "address": "\u5999\u9AD8\u5E02\u5927\u5B57\u7530\u53E3308",
      "area": "\u5999\u9AD8\u9AD8\u539F\u30FB\u95A2\u5DDD\u30FB\u8D64\u5009\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E5%A6%99%E9%AB%98%E5%B8%82%20%E5%A6%99%E9%AB%98%E9%AB%98%E5%8E%9F%E3%83%A1%E3%83%83%E3%82%BB%20%E5%A6%99%E9%AB%98%E5%B8%82%E5%A4%A7%E5%AD%97%E7%94%B0%E5%8F%A3308",
      "officialUrl": "https://www.city.myoko.niigata.jp/"
    },
    {
      "id": "SD01",
      "region": "\u4F50\u6E21",
      "municipality": "\u4F50\u6E21\u5E02",
      "name": "\u4F50\u6E21\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u4F50\u6E21\u5E02\u5343\u7A2E232",
      "area": "\u91D1\u4E95\u30FB\u5343\u7A2E\u30FB\u4E2D\u8208\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E4%BD%90%E6%B8%A1%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E4%BD%90%E6%B8%A1%E5%B8%82%E5%8D%83%E7%A8%AE232",
      "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
    },
    {
      "id": "SD02",
      "region": "\u4F50\u6E21",
      "municipality": "\u4F50\u6E21\u5E02",
      "name": "\u4E21\u6D25\u884C\u653F\u30B5\u30FC\u30D3\u30B9\u30BB\u30F3\u30BF\u30FC",
      "address": "\u4F50\u6E21\u5E02\u4E21\u6D25\u6E4A353-1",
      "area": "\u4E21\u6D25\u5730\u533A\uFF08\u6E4A\u30FB\u5937\u30FB\u52A0\u8302\u6B4C\u4EE3\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E4%B8%A1%E6%B4%A5%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E4%B8%A1%E6%B4%A5%E6%B9%8A353-1",
      "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
    },
    {
      "id": "SD03",
      "region": "\u4F50\u6E21",
      "municipality": "\u4F50\u6E21\u5E02",
      "name": "\u76F8\u5DDD\u884C\u653F\u30B5\u30FC\u30D3\u30B9\u30BB\u30F3\u30BF\u30FC",
      "address": "\u4F50\u6E21\u5E02\u76F8\u5DDD\u6804\u753A1",
      "area": "\u76F8\u5DDD\u5730\u533A\uFF08\u6804\u753A\u30FB\u9271\u5C71\u30FB\u7FBD\u7530\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E7%9B%B8%E5%B7%9D%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E7%9B%B8%E5%B7%9D%E6%A0%84%E7%94%BA1",
      "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
    },
    {
      "id": "SD04",
      "region": "\u4F50\u6E21",
      "municipality": "\u4F50\u6E21\u5E02",
      "name": "\u4F50\u548C\u7530\u884C\u653F\u30B5\u30FC\u30D3\u30B9\u30BB\u30F3\u30BF\u30FC",
      "address": "\u4F50\u6E21\u5E02\u6CB3\u539F\u7530\u672C\u753A394",
      "area": "\u4F50\u548C\u7530\u5730\u533A\uFF08\u6CB3\u539F\u7530\u30FB\u516B\u5E61\uFF09",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E4%BD%90%E5%92%8C%E7%94%B0%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E6%B2%B3%E5%8E%9F%E7%94%B0%E6%9C%AC%E7%94%BA394",
      "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
    },
    {
      "id": "SD05",
      "region": "\u4F50\u6E21",
      "municipality": "\u4F50\u6E21\u5E02",
      "name": "\u771F\u91CE\u884C\u653F\u30B5\u30FC\u30D3\u30B9\u30BB\u30F3\u30BF\u30FC",
      "address": "\u4F50\u6E21\u5E02\u5409\u5CA1343",
      "area": "\u771F\u91CE\u30FB\u7FBD\u8302\u30FB\u5C0F\u6728\u5730\u533A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BD%90%E6%B8%A1%E5%B8%82%20%E7%9C%9F%E9%87%8E%E8%A1%8C%E6%94%BF%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%20%E4%BD%90%E6%B8%A1%E5%B8%82%E5%90%89%E5%B2%A1343",
      "officialUrl": "https://www.city.sado.niigata.jp/soshiki/1049/2234.html"
    },
    {
      "id": "SB01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u767A\u7530\u5E02",
      "name": "\u65B0\u767A\u7530\u5E02\u5F79\u6240 \u30E8\u30EA\u30CD\u30B9\u3057\u3070\u305F",
      "address": "\u65B0\u767A\u7530\u5E02\u4E2D\u592E\u753A3-3-3",
      "area": "\u65B0\u767A\u7530\u4E2D\u5FC3\u90E8\u30FB\u4E2D\u592E\u753A\u30FB\u672C\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E5%BD%B9%E6%89%80%20%E3%83%A8%E3%83%AA%E3%83%8D%E3%82%B9%E3%81%97%E3%81%B0%E3%81%9F%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E4%B8%AD%E5%A4%AE%E7%94%BA3-3-3",
      "officialUrl": "https://www.city.shibata.lg.jp/shisei/senkyo/senkyoseido/1031383.html"
    },
    {
      "id": "SB02",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u767A\u7530\u5E02",
      "name": "\u65B0\u767A\u7530\u5E02\u8C4A\u6D66\u652F\u6240",
      "address": "\u65B0\u767A\u7530\u5E02\u4E59\u6B2126",
      "area": "\u8C4A\u6D66\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E8%B1%8A%E6%B5%A6%E6%94%AF%E6%89%80%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E4%B9%99%E6%AC%A126",
      "officialUrl": "https://www.city.shibata.lg.jp/shisei/senkyo/senkyoseido/1031383.html"
    },
    {
      "id": "SB03",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u65B0\u767A\u7530\u5E02",
      "name": "\u65B0\u767A\u7530\u5E02\u7D2B\u96F2\u5BFA\u652F\u6240",
      "address": "\u65B0\u767A\u7530\u5E02\u7A32\u8377\u5CA12371",
      "area": "\u7D2B\u96F2\u5BFA\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E7%B4%AB%E9%9B%B2%E5%AF%BA%E6%94%AF%E6%89%80%20%E6%96%B0%E7%99%BA%E7%94%B0%E5%B8%82%E7%A8%B2%E8%8D%B7%E5%B2%A12371",
      "officialUrl": "https://www.city.shibata.lg.jp/shisei/senkyo/senkyoseido/1031383.html"
    },
    {
      "id": "MK01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u6751\u4E0A\u5E02",
      "name": "\u6751\u4E0A\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u6751\u4E0A\u5E02\u4E09\u6CC9101",
      "area": "\u6751\u4E0A\u57CE\u4E0B\u753A\u30FB\u5CA9\u8239\u30FB\u702C\u6CE2\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9D%91%E4%B8%8A%E5%B8%82%20%E6%9D%91%E4%B8%8A%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E6%9D%91%E4%B8%8A%E5%B8%82%E4%B8%89%E6%B3%89101",
      "officialUrl": "https://www.city.murakami.lg.jp/site/senkyo/"
    },
    {
      "id": "MK02",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u6751\u4E0A\u5E02",
      "name": "\u6751\u4E0A\u5E02\u8352\u5DDD\u652F\u6240",
      "address": "\u6751\u4E0A\u5E02\u7FBD\u4E0B300",
      "area": "\u8352\u5DDD\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9D%91%E4%B8%8A%E5%B8%82%20%E6%9D%91%E4%B8%8A%E5%B8%82%E8%8D%92%E5%B7%9D%E6%94%AF%E6%89%80%20%E6%9D%91%E4%B8%8A%E5%B8%82%E7%BE%BD%E4%B8%8B300",
      "officialUrl": "https://www.city.murakami.lg.jp/site/senkyo/"
    },
    {
      "id": "MK03",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u6751\u4E0A\u5E02",
      "name": "\u6751\u4E0A\u5E02\u795E\u6797\u652F\u6240",
      "address": "\u6751\u4E0A\u5E02\u5CA9\u8239\u99C5\u524D56-1",
      "area": "\u795E\u6797\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E6%9D%91%E4%B8%8A%E5%B8%82%20%E6%9D%91%E4%B8%8A%E5%B8%82%E7%A5%9E%E6%9E%97%E6%94%AF%E6%89%80%20%E6%9D%91%E4%B8%8A%E5%B8%82%E5%B2%A9%E8%88%B9%E9%A7%85%E5%89%8D56-1",
      "officialUrl": "https://www.city.murakami.lg.jp/site/senkyo/"
    },
    {
      "id": "GS01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u4E94\u6CC9\u5E02",
      "name": "\u4E94\u6CC9\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u4E94\u6CC9\u5E02\u592A\u75301092-1",
      "area": "\u4E94\u6CC9\u4E2D\u5FC3\u90E8\u30FB\u592A\u7530\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E6%B3%89%E5%B8%82%20%E4%BA%94%E6%B3%89%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E4%BA%94%E6%B3%89%E5%B8%82%E5%A4%AA%E7%94%B01092-1",
      "officialUrl": "https://www.city.gosen.lg.jp/soshiki/senkan/"
    },
    {
      "id": "GS02",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u4E94\u6CC9\u5E02",
      "name": "\u4E94\u6CC9\u5E02\u6751\u677E\u652F\u6240",
      "address": "\u4E94\u6CC9\u5E02\u6751\u677E\u4E59130",
      "area": "\u6751\u677E\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E6%B3%89%E5%B8%82%20%E4%BA%94%E6%B3%89%E5%B8%82%E6%9D%91%E6%9D%BE%E6%94%AF%E6%89%80%20%E4%BA%94%E6%B3%89%E5%B8%82%E6%9D%91%E6%9D%BE%E4%B9%99130",
      "officialUrl": "https://www.city.gosen.lg.jp/soshiki/senkan/"
    },
    {
      "id": "AG01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u963F\u8CC0\u91CE\u5E02",
      "name": "\u963F\u8CC0\u91CE\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u963F\u8CC0\u91CE\u5E02\u5CA1\u5C71\u753A10-15",
      "area": "\u6C34\u539F\u5730\u533A\u30FB\u5CA1\u5C71\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E5%B2%A1%E5%B1%B1%E7%94%BA10-15",
      "officialUrl": "https://www.city.agano.niigata.jp/soshiki/senkan/"
    },
    {
      "id": "AG02",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u963F\u8CC0\u91CE\u5E02",
      "name": "\u963F\u8CC0\u91CE\u5E02\u5B89\u7530\u652F\u6240",
      "address": "\u963F\u8CC0\u91CE\u5E02\u4FDD\u75304664",
      "area": "\u5B89\u7530\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E5%AE%89%E7%94%B0%E6%94%AF%E6%89%80%20%E9%98%BF%E8%B3%80%E9%87%8E%E5%B8%82%E4%BF%9D%E7%94%B04664",
      "officialUrl": "https://www.city.agano.niigata.jp/soshiki/senkan/"
    },
    {
      "id": "TN01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u80CE\u5185\u5E02",
      "name": "\u80CE\u5185\u5E02\u5F79\u6240 \u672C\u5E81\u820E",
      "address": "\u80CE\u5185\u5E02\u65B0\u548C\u753A2-10",
      "area": "\u4E2D\u6761\u4E2D\u5FC3\u90E8\u30FB\u65B0\u548C\u753A\u30A8\u30EA\u30A2",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%83%8E%E5%86%85%E5%B8%82%20%E8%83%8E%E5%86%85%E5%B8%82%E5%BD%B9%E6%89%80%20%E6%9C%AC%E5%BA%81%E8%88%8E%20%E8%83%8E%E5%86%85%E5%B8%82%E6%96%B0%E5%92%8C%E7%94%BA2-10",
      "officialUrl": "https://www.city.tainai.niigata.jp/kurashi/senkyo/"
    },
    {
      "id": "TN02",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u80CE\u5185\u5E02",
      "name": "\u80CE\u5185\u5E02\u9ED2\u5DDD\u5E81\u820E",
      "address": "\u80CE\u5185\u5E02\u9ED2\u5DDD1410",
      "area": "\u9ED2\u5DDD\u5730\u533A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%83%8E%E5%86%85%E5%B8%82%20%E8%83%8E%E5%86%85%E5%B8%82%E9%BB%92%E5%B7%9D%E5%BA%81%E8%88%8E%20%E8%83%8E%E5%86%85%E5%B8%82%E9%BB%92%E5%B7%9D1410",
      "officialUrl": "https://www.city.tainai.niigata.jp/kurashi/senkyo/"
    },
    {
      "id": "SR01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u8056\u7C60\u753A",
      "name": "\u8056\u7C60\u753A\u5F79\u5834",
      "address": "\u5317\u84B2\u539F\u90E1\u8056\u7C60\u753A\u5927\u5B57\u8ACF\u8A2A\u5C711635-4",
      "area": "\u8056\u7C60\u753A\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E8%81%96%E7%B1%A0%E7%94%BA%20%E8%81%96%E7%B1%A0%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E5%8C%97%E8%92%B2%E5%8E%9F%E9%83%A1%E8%81%96%E7%B1%A0%E7%94%BA%E5%A4%A7%E5%AD%97%E8%AB%8F%E8%A8%AA%E5%B1%B11635-4",
      "officialUrl": "https://www.town.seiro.niigata.jp/"
    },
    {
      "id": "AM01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u963F\u8CC0\u753A",
      "name": "\u963F\u8CC0\u753A\u5F79\u5834",
      "address": "\u6771\u84B2\u539F\u90E1\u963F\u8CC0\u753A\u6D25\u5DDD580",
      "area": "\u6D25\u5DDD\u30FB\u9E7F\u702C\u30FB\u4E0A\u5DDD\u30FB\u4E09\u5DDD\u5730\u533A",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%B3%80%E7%94%BA%20%E9%98%BF%E8%B3%80%E7%94%BA%E5%BD%B9%E5%A0%B4%20%E6%9D%B1%E8%92%B2%E5%8E%9F%E9%83%A1%E9%98%BF%E8%B3%80%E7%94%BA%E6%B4%A5%E5%B7%9D580",
      "officialUrl": "https://www.town.aga.niigata.jp/"
    },
    {
      "id": "SK01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u95A2\u5DDD\u6751",
      "name": "\u95A2\u5DDD\u6751\u5F79\u5834",
      "address": "\u5CA9\u8239\u90E1\u95A2\u5DDD\u6751\u5927\u5B57\u4E0B\u95A2110-1",
      "area": "\u95A2\u5DDD\u6751\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%96%A2%E5%B7%9D%E6%9D%91%20%E9%96%A2%E5%B7%9D%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E5%B2%A9%E8%88%B9%E9%83%A1%E9%96%A2%E5%B7%9D%E6%9D%91%E5%A4%A7%E5%AD%97%E4%B8%8B%E9%96%A2110-1",
      "officialUrl": "http://www.vill.sekikawa.niigata.jp/"
    },
    {
      "id": "AW01",
      "region": "\u4E0B\u8D8A",
      "municipality": "\u7C9F\u5CF6\u6D66\u6751",
      "name": "\u7C9F\u5CF6\u6D66\u6751\u5F79\u5834",
      "address": "\u5CA9\u8239\u90E1\u7C9F\u5CF6\u6D66\u6751\u5B57\u65E5\u898B\u5185151-1",
      "area": "\u7C9F\u5CF6\u6D66\u6751\u5168\u57DF",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=%E7%B2%9F%E5%B3%B6%E6%B5%A6%E6%9D%91%20%E7%B2%9F%E5%B3%B6%E6%B5%A6%E6%9D%91%E5%BD%B9%E5%A0%B4%20%E5%B2%A9%E8%88%B9%E9%83%A1%E7%B2%9F%E5%B3%B6%E6%B5%A6%E6%9D%91%E5%AD%97%E6%97%A5%E8%A6%8B%E5%86%85151-1",
      "officialUrl": "http://www.vill.awashimaura.lg.jp/"
    }
  ];
  var REGION_CATEGORIES = ["\u3059\u3079\u3066", "\u4E0B\u8D8A", "\u4E2D\u8D8A", "\u4E0A\u8D8A", "\u4F50\u6E21"];

  // src/views/PlaceView.ts
  function renderPlace(renderFn) {
    const wrap = document.createElement("div");
    const title = document.createElement("h2");
    title.className = "disp section-title";
    title.textContent = "\u65B0\u6F5F\u770C \u6295\u7968\u6240\u6848\u5185 (\u516830\u5E02\u753A\u6751\u5BFE\u5FDC\u30FB284\u7B87\u6240)";
    wrap.appendChild(title);
    const sub = document.createElement("p");
    sub.className = "section-sub";
    sub.textContent = "\u4E0B\u8D8A\u30FB\u4E2D\u8D8A\u30FB\u4E0A\u8D8A\u30FB\u4F50\u6E21\u306E\u516830\u5E02\u753A\u6751\u3002\u304A\u4F4F\u307E\u3044\u306E\u5E02\u753A\u6751\u30FB\u5730\u533A\u3092\u9078\u629E\u307E\u305F\u306F\u30AD\u30FC\u30EF\u30FC\u30C9\u691C\u7D22\u3067\u304D\u307E\u3059\u3002";
    wrap.appendChild(sub);
    const regionContainer = document.createElement("div");
    regionContainer.className = "region-filter-container";
    regionContainer.style.marginBottom = "14px";
    const regionLabel = document.createElement("p");
    regionLabel.className = "filter-label";
    regionLabel.textContent = "1. \u5730\u57DF\u30A8\u30EA\u30A2\u3092\u9078\u629E:";
    regionContainer.appendChild(regionLabel);
    const regionChips = document.createElement("div");
    regionChips.className = "region-chips";
    regionChips.style.display = "flex";
    regionChips.style.gap = "6px";
    regionChips.style.flexWrap = "wrap";
    REGION_CATEGORIES.forEach((reg) => {
      const count = reg === "\u3059\u3079\u3066" ? POLLING_PLACES.length : POLLING_PLACES.filter((p) => p.region === reg).length;
      const btn = document.createElement("button");
      btn.className = "region-chip" + (state.selectedRegion === reg ? " active" : "");
      btn.innerHTML = `<span>${reg}</span><span class="chip-count">${count}</span>`;
      btn.addEventListener("click", () => {
        state.selectedRegion = reg;
        state.selectedMunicipality = "\u3059\u3079\u3066";
        renderFn();
      });
      regionChips.appendChild(btn);
    });
    regionContainer.appendChild(regionChips);
    wrap.appendChild(regionContainer);
    const availableMunicipalities = Array.from(new Set(
      POLLING_PLACES.filter((p) => state.selectedRegion === "\u3059\u3079\u3066" || p.region === state.selectedRegion).map((p) => p.municipality)
    ));
    const muniContainer = document.createElement("div");
    muniContainer.className = "muni-filter-container";
    muniContainer.style.marginBottom = "16px";
    const muniLabel = document.createElement("p");
    muniLabel.className = "filter-label";
    muniLabel.textContent = "2. \u5E02\u753A\u6751\u30FB\u533A\u3092\u9078\u629E:";
    muniContainer.appendChild(muniLabel);
    const muniChips = document.createElement("div");
    muniChips.className = "muni-chips";
    muniChips.style.display = "flex";
    muniChips.style.gap = "6px";
    muniChips.style.flexWrap = "wrap";
    muniChips.style.maxHeight = "160px";
    muniChips.style.overflowY = "auto";
    muniChips.style.padding = "2px";
    const allMuniBtn = document.createElement("button");
    allMuniBtn.className = "muni-chip" + (state.selectedMunicipality === "\u3059\u3079\u3066" ? " active" : "");
    allMuniBtn.textContent = "\u3059\u3079\u3066 (" + availableMunicipalities.length + "\u5E02\u753A\u6751/\u533A)";
    allMuniBtn.addEventListener("click", () => {
      state.selectedMunicipality = "\u3059\u3079\u3066";
      renderFn();
    });
    muniChips.appendChild(allMuniBtn);
    availableMunicipalities.forEach((m) => {
      const count = POLLING_PLACES.filter((p) => p.municipality === m).length;
      const btn = document.createElement("button");
      btn.className = "muni-chip" + (state.selectedMunicipality === m ? " active" : "");
      btn.innerHTML = `<span>${m}</span><span class="chip-count">${count}</span>`;
      btn.addEventListener("click", () => {
        state.selectedMunicipality = m;
        renderFn();
      });
      muniChips.appendChild(btn);
    });
    muniContainer.appendChild(muniChips);
    wrap.appendChild(muniContainer);
    const searchBox = document.createElement("div");
    searchBox.className = "place-search-box";
    const searchIcon = document.createElement("span");
    searchIcon.className = "search-icon";
    searchIcon.innerHTML = icon("search", 16);
    searchBox.appendChild(searchIcon);
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "place-search-input";
    searchInput.placeholder = "\u5E02\u753A\u6751\u540D\u3001\u6295\u7968\u6240\u540D\u3001\u4F4F\u6240\u3001\u753A\u540D\uFF08\u4F8B: \u9577\u5CA1\u3001\u4F50\u6E21\u3001\u9AD8\u7530\u3001\u677E\u6D5C\uFF09\u3067\u691C\u7D22...";
    searchInput.value = state.placeSearchQuery;
    searchInput.addEventListener("input", (e) => {
      state.placeSearchQuery = e.target.value;
      updatePollingListContainer();
    });
    searchBox.appendChild(searchInput);
    if (state.placeSearchQuery) {
      const clearBtn = document.createElement("button");
      clearBtn.className = "search-clear-btn";
      clearBtn.innerHTML = icon("x", 14);
      clearBtn.addEventListener("click", () => {
        state.placeSearchQuery = "";
        renderFn();
      });
      searchBox.appendChild(clearBtn);
    }
    wrap.appendChild(searchBox);
    const countBadge = document.createElement("div");
    countBadge.className = "result-count-badge";
    wrap.appendChild(countBadge);
    const listContainer = document.createElement("div");
    listContainer.className = "polling-list-container";
    wrap.appendChild(listContainer);
    function updatePollingListContainer() {
      listContainer.innerHTML = "";
      const q = state.placeSearchQuery.trim().toLowerCase();
      const filtered = POLLING_PLACES.filter((p) => {
        if (state.selectedRegion !== "\u3059\u3079\u3066" && p.region !== state.selectedRegion) {
          return false;
        }
        if (state.selectedMunicipality !== "\u3059\u3079\u3066" && p.municipality !== state.selectedMunicipality) {
          return false;
        }
        if (q) {
          const target = `${p.id} ${p.region} ${p.municipality} ${p.name} ${p.address} ${p.area} ${p.updateInfo || ""}`.toLowerCase();
          return target.includes(q);
        }
        return true;
      });
      const activeFilterLabel = state.selectedMunicipality !== "\u3059\u3079\u3066" ? state.selectedMunicipality : state.selectedRegion !== "\u3059\u3079\u3066" ? state.selectedRegion : "\u65B0\u6F5F\u770C\u5168\u57DF";
      countBadge.textContent = q ? `\u{1F50D} \u300C${activeFilterLabel}\u300D\u306E\u691C\u7D22\u7D50\u679C: ${filtered.length}\u4EF6\u306E\u6295\u7968\u6240\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F` : `\u{1F4CD} \u300C${activeFilterLabel}\u300D: \u5168${filtered.length}\u4EF6\u3092\u8868\u793A\u4E2D`;
      if (filtered.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "empty-polling-state";
        emptyState.innerHTML = `
        <p class="empty-title">\u6761\u4EF6\u306B\u4E00\u81F4\u3059\u308B\u6295\u7968\u6240\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F</p>
        <p class="empty-desc">\u5730\u57DF\u30FB\u5E02\u753A\u6751\u9078\u629E\u3092\u300C\u3059\u3079\u3066\u300D\u306B\u3059\u308B\u304B\u3001\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</p>
      `;
        const resetFilterBtn = document.createElement("button");
        resetFilterBtn.className = "reset-btn";
        resetFilterBtn.style.marginTop = "12px";
        resetFilterBtn.innerHTML = `${icon("rotate-ccw", 14)} \u6761\u4EF6\u3092\u5168\u30EA\u30BB\u30C3\u30C8`;
        resetFilterBtn.addEventListener("click", () => {
          state.selectedRegion = "\u3059\u3079\u3066";
          state.selectedMunicipality = "\u3059\u3079\u3066";
          state.placeSearchQuery = "";
          renderFn();
        });
        emptyState.appendChild(resetFilterBtn);
        listContainer.appendChild(emptyState);
        return;
      }
      filtered.forEach((p) => {
        const card = document.createElement("div");
        card.className = "polling-card";
        const cardHead = document.createElement("div");
        cardHead.className = "polling-card-head";
        cardHead.innerHTML = `
        <div class="head-tags">
          <span class="region-badge-tag">${p.region}</span>
          <span class="ward-tag">${p.municipality}</span>
          <span class="code-tag">No.${p.id}</span>
        </div>
      `;
        card.appendChild(cardHead);
        const nameEl = document.createElement("h3");
        nameEl.className = "polling-name";
        nameEl.textContent = p.name;
        card.appendChild(nameEl);
        const addressEl = document.createElement("p");
        addressEl.className = "polling-address";
        addressEl.innerHTML = `${icon("map-pin", 14)} <span>${p.address}</span>`;
        card.appendChild(addressEl);
        if (p.area) {
          const areaEl = document.createElement("div");
          areaEl.className = "polling-area";
          areaEl.innerHTML = `<span class="area-label">\u5BFE\u8C61\u533A\u57DF\u30FB\u30A8\u30EA\u30A2:</span> ${p.area}`;
          card.appendChild(areaEl);
        }
        if (p.updateInfo) {
          const noticeEl = document.createElement("div");
          noticeEl.className = "polling-notice";
          noticeEl.innerHTML = `\u26A0\uFE0F <strong>\u5909\u66F4\u6CE8\u610F:</strong> ${p.updateInfo}`;
          card.appendChild(noticeEl);
        }
        const btnGroup = document.createElement("div");
        btnGroup.style.display = "flex";
        btnGroup.style.gap = "8px";
        btnGroup.style.flexWrap = "wrap";
        btnGroup.style.marginTop = "8px";
        if (p.officialUrl) {
          const offBtn = document.createElement("a");
          offBtn.className = "muni-official-btn";
          offBtn.href = p.officialUrl;
          offBtn.target = "_blank";
          offBtn.rel = "noopener noreferrer";
          offBtn.innerHTML = `${p.municipality.replace(/新潟市.*/, "\u65B0\u6F5F\u5E02")}\u516C\u5F0F \u6295\u7968\u6240\u6848\u5185 ${icon("external-link", 13)}`;
          btnGroup.appendChild(offBtn);
        }
        if (p.mapUrl) {
          const mapBtn = document.createElement("a");
          mapBtn.className = "map-direct-btn";
          mapBtn.href = p.mapUrl;
          mapBtn.target = "_blank";
          mapBtn.rel = "noopener noreferrer";
          mapBtn.innerHTML = `${icon("map-pin", 14)} Google Maps\u3067\u78BA\u8A8D \u2197`;
          btnGroup.appendChild(mapBtn);
        }
        card.appendChild(btnGroup);
        listContainer.appendChild(card);
      });
    }
    updatePollingListContainer();
    const footnote = document.createElement("p");
    footnote.className = "footnote";
    footnote.textContent = "\u203B\u63B2\u8F09\u30C7\u30FC\u30BF\u306F\u5404\u81EA\u6CBB\u4F53\u30FB\u9078\u6319\u7BA1\u7406\u59D4\u54E1\u4F1A\u306E\u516C\u958B\u60C5\u5831\u306B\u57FA\u3065\u3044\u3066\u3044\u307E\u3059\u3002\u6295\u7968\u6240\u306F\u4F4F\u6C11\u767B\u9332\u4F4F\u6240\u306B\u3088\u3063\u3066\u6307\u5B9A\u3055\u308C\u307E\u3059\u3002\u6295\u7968\u6240\u5165\u5834\u5238\u306B\u8A18\u8F09\u306E\u5834\u6240\u304C\u6B63\u5F0F\u306A\u6295\u7968\u5834\u6240\u3067\u3059\u3002";
    wrap.appendChild(footnote);
    return wrap;
  }

  // app.ts
  var root = document.getElementById("app");
  function render() {
    root.innerHTML = "";
    root.appendChild(renderHeader(render));
    const content = document.createElement("div");
    content.className = "wrap content";
    switch (state.tab) {
      case "top":
        content.appendChild(renderTopLandingPage());
        break;
      case "schedule":
        content.appendChild(renderSchedulePage(render));
        break;
      case "pledges":
        content.appendChild(renderPledges());
        break;
      case "quiz":
        content.appendChild(
          state.quizFinished ? renderQuizResult(render) : renderQuizQuestion(render)
        );
        break;
      case "place":
        content.appendChild(renderPlace(render));
        break;
    }
    root.appendChild(content);
  }
  document.addEventListener("DOMContentLoaded", () => {
    render();
  });
})();
