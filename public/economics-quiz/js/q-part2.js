/* Question bank — Chapters 4–6 (same format as q-part1.js; first option = correct answer). */
(function () {
  const B = (window.QB = window.QB || []);
  const mc = (ch, q, o, e) => B.push({ ch, t: "mc", q, o, e });
  const tf = (ch, q, a, e) => B.push({ ch, t: "tf", q, a, e });

  /* ───────────── CHAPTER 4 · Theory of Production and Cost ───────────── */
  mc(4, `Production is best defined as…`, [
    `The process of transforming inputs into outputs (creating value or utility)`,
    `Buying goods from other countries`,
    `Selling goods to consumers`,
    `Saving money for investment`,
  ], `Outputs can be tangible (goods) or intangible (services).`);

  mc(4, `A production function describes…`, [
    `The technical relationship between inputs and the maximum output obtainable with given technology`,
    `The relationship between price and quantity`,
    `The relationship between cost and revenue`,
    `The firm's profit at each output level`,
  ], `Q = f(X₁, X₂, …, Xₙ).`);

  mc(4, `Which of the following is the best example of a FIXED input in the short run?`, [
    `Buildings and machinery`, `Unskilled labour`, `Raw materials`, `Electricity used per hour`,
  ], `Variable inputs (e.g. unskilled labour) can be changed almost instantly.`);

  mc(4, `In economics, the "short run" is…`, [
    `A period in which at least one input is fixed (its length differs from firm to firm)`,
    `Exactly one year for every firm`,
    `A period in which all inputs are variable`,
    `A period shorter than one month for all industries`,
  ], `The short run is not a fixed calendar period.`);

  mc(4, `Marginal product of labour (MPL) is…`, [
    `The change in total product from employing one more unit of labour (ΔQ/ΔL)`,
    `Total product divided by labour`,
    `Total product multiplied by labour`,
    `The wage rate`,
  ], `MPL is the slope of the total product curve.`);

  mc(4, `Average product of labour is calculated as…`, [
    `APL = TP / L`, `APL = ΔTP / ΔL`, `APL = L / TP`, `APL = TP × L`,
  ], `It is the mean output per unit of the variable input.`);

  mc(4, `When APL is increasing, the relationship between MPL and APL is…`, [
    `MPL > APL`, `MPL < APL`, `MPL = APL`, `MPL = 0`,
  ], `MP cuts AP at AP's maximum (MPL = APL); beyond that, MPL < APL.`);

  mc(4, `At the maximum point of the average product curve…`, [
    `MPL = APL`, `MPL = 0`, `MPL is at its maximum`, `TP is at its maximum`,
  ], `This marks the end of Stage I.`);

  tf(4, `When total product is at its maximum, marginal product is zero.`, true,
    `TP stops rising when MP = 0; this is the boundary between Stage II and Stage III.`);

  mc(4, `The cut-flower firm has Q = 4KL − 0.6K² − 0.1L² with K = 5. The labour input that maximises total output is…`, [
    `L = 100`, `L = 50`, `L = 20`, `L = 200`,
  ], `MPL = 4K − 0.2L = 20 − 0.2L = 0 → L = 100.`);

  mc(4, `For the same firm (K = 5), the maximum achievable output is…`, [
    `985`, `1000`, `900`, `1985`,
  ], `Q = 4(5)(100) − 0.6(25) − 0.1(10,000) = 2000 − 15 − 1000 = 985.`);

  mc(4, `For the same firm, the average product of labour function is…`, [
    `APL = 20 − 15/L − 0.1L`, `APL = 20 − 0.2L`, `APL = 20L − 15 − 0.1L²`, `APL = 4K − 0.1L`,
  ], `Q = 20L − 15 − 0.1L², so APL = Q/L = 20 − 15/L − 0.1L.`);

  mc(4, `The law of variable proportions (diminishing returns) states that…`, [
    `Beyond some point, adding more of a variable input to a fixed input yields smaller and smaller additional output`,
    `Output always rises at an increasing rate`,
    `All inputs can be increased in the same proportion`,
    `Marginal product is constant forever`,
  ], `It assumes fixed technology and equally skilled units of labour; it begins to operate after MP reaches its maximum.`);

  mc(4, `Stage I of short-run production covers the range where…`, [
    `APL is increasing (from the origin to the point where MPL = APL)`,
    `MPL is declining but positive`,
    `MPL is negative`,
    `TP is declining`,
  ], `In Stage I the fixed input is under-utilised.`);

  mc(4, `The EFFICIENT (rational) region of short-run production is…`, [
    `Stage II: MPL is declining but positive`, `Stage I: APL is rising`, `Stage III: MPL is negative`, `Any stage, depending on the price`,
  ], `A rational firm operates between max APL (MPL = APL) and MPL = 0.`);

  mc(4, `Why should a rational firm NOT operate in Stage III?`, [
    `Marginal product is negative; additional workers reduce total output`,
    `Average product is rising`,
    `The fixed input is under-utilised`,
    `Total product is rising rapidly`,
  ], `In Stage III the fixed input is over-utilised.`);

  mc(4, `Explicit costs are…`, [
    `Out-of-pocket payments for purchased inputs`,
    `Estimated opportunity costs of self-owned inputs`,
    `Costs that do not vary with output`,
    `The profit of the firm`,
  ], `Implicit costs are the estimated opportunity costs of non-purchased (self-owned) inputs.`);

  mc(4, `Economic cost equals…`, [
    `Explicit cost + implicit cost`, `Explicit cost only`, `Implicit cost only`, `Total revenue − profit − tax`,
  ], `Economic profit = TR − (explicit + implicit costs).`);

  mc(4, `Mr. X quits a job paying Br. 10,000 per month to run his own firm. The Br. 10,000 is part of his firm's…`, [
    `Implicit (opportunity) cost`, `Explicit cost`, `Fixed cost only`, `Accounting cost`,
  ], `It is the opportunity cost of his own labour.`);

  mc(4, `If implicit costs exist (are greater than zero), then…`, [
    `Accounting profit is larger than economic profit`,
    `Economic profit is larger than accounting profit`,
    `Both profits are equal`,
    `Accounting profit is always zero`,
  ], `Accounting profit exceeds economic profit by the amount of implicit cost.`);

  mc(4, `In the short run, total cost is…`, [
    `TC = TFC + TVC`, `TC = TFC − TVC`, `TC = AFC + AVC`, `TC = MC × Q`,
  ], `At zero output TVC = 0, so TC = TFC.`);

  mc(4, `Which of the following is a typical FIXED cost?`, [
    `Rent of the factory building`, `Cost of raw materials`, `Direct labour wages tied to output`, `Fuel used in production`,
  ], `Fixed costs do not vary with output; they are avoidable only by shutting down.`);

  mc(4, `The shape of the total variable cost (TVC) curve is…`, [
    `Inverse S-shaped`, `A horizontal line`, `A straight line from the origin only`, `U-shaped`,
  ], `This reflects the law of variable proportions. The TFC curve is a horizontal line.`);

  mc(4, `As output increases, the average fixed cost (AFC) curve…`, [
    `Declines continuously, approaching both axes`, `Rises continuously`, `Is U-shaped`, `Is horizontal`,
  ], `AFC = TFC/Q.`);

  mc(4, `The average cost (AC) curve can be obtained by…`, [
    `Vertically adding AVC and AFC (AC = AVC + AFC)`, `Horizontally adding AVC and AFC`, `Subtracting AFC from MC`, `Dividing MC by Q`,
  ], `The vertical gap between AC and AVC is AFC and it shrinks as output rises.`);

  mc(4, `The marginal cost curve intersects…`, [
    `The minimum points of both the AVC and AC curves`, `The maximum point of the AVC curve`, `The AFC curve at its minimum`, `Only the TC curve`,
  ], `MC is below AC (and AVC) when they fall and above when they rise.`);

  mc(4, `Why are the AVC, AC and MC curves U-shaped?`, [
    `The law of variable proportions`, `The law of demand`, `Constant returns to scale`, `Perfect competition`,
  ], `Productivity of the variable factor first rises, then falls.`);

  mc(4, `TC = 2Q³ − 2Q² + Q + 10. Then TFC and the expression for MC are…`, [
    `TFC = 10; MC = 6Q² − 4Q + 1`, `TFC = 0; MC = 6Q² − 4Q + 1`, `TFC = 10; MC = 2Q² − 2Q + 1`, `TFC = 1; MC = 6Q² − 4Q + 10`,
  ], `TFC is the constant; MC = dTC/dQ.`);

  mc(4, `For TC = 2Q³ − 2Q² + Q + 10, AVC is minimised at Q = ___ and the minimum AVC is ___.`, [
    `0.5; 0.5`, `1/3; 0.33`, `1; 1`, `0.5; 1`,
  ], `AVC = 2Q² − 2Q + 1; d(AVC)/dQ = 4Q − 2 = 0 → Q = 0.5; AVC = 0.5 − 1 + 1 = 0.5. (MC is minimised at Q = 1/3 with MC ≈ 0.33.)`);

  mc(4, `If the wage rate is w, marginal cost is related to the marginal product of labour by…`, [
    `MC = w / MPL`, `MC = w × MPL`, `MC = MPL / w`, `MC = w + MPL`,
  ], `When MPL is at its maximum, MC is at its minimum. Similarly AVC = w / APL.`);

  mc(4, `Q = 6L² − 0.4L³. The value of L that maximises output is…`, [
    `L = 10`, `L = 7.5`, `L = 5`, `L = 15`,
  ], `MP = 12L − 1.2L² = 0 → L = 10.`);

  mc(4, `For Q = 6L² − 0.4L³, the value of L that maximises MARGINAL product is…`, [
    `L = 5`, `L = 10`, `L = 7.5`, `L = 12`,
  ], `MP = 12L − 1.2L²; dMP/dL = 12 − 2.4L = 0 → L = 5.`);

  mc(4, `For Q = 6L² − 0.4L³, the value of L that maximises AVERAGE product is…`, [
    `L = 7.5`, `L = 5`, `L = 10`, `L = 3`,
  ], `AP = 6L − 0.4L²; dAP/dL = 6 − 0.8L = 0 → L = 7.5.`);

  mc(4, `With Q = L^(3/4)·K^(1/4) and K fixed, the marginal product of labour is…`, [
    `MPL = (3/4)·L^(−1/4)·K^(1/4)`, `MPL = L^(−1/4)·K^(1/4)`, `MPL = (1/4)·L^(3/4)·K^(−3/4)`, `MPL = (3/4)·L^(3/4)·K^(1/4)`,
  ], `APL = Q/L = L^(−1/4)K^(1/4); MPL = dQ/dL = (3/4)L^(−1/4)K^(1/4).`);

  mc(4, `TC = Q³/3 − 2Q² + 60Q + 100. The minimum value of MC is…`, [
    `56 (at Q = 2)`, `57 (at Q = 3)`, `60 (at Q = 0)`, `4 (at Q = 2)`,
  ], `MC = Q² − 4Q + 60; d(MC)/dQ = 2Q − 4 = 0 → Q = 2; MC = 4 − 8 + 60 = 56. (Min AVC = 57 at Q = 3.)`);

  mc(4, `For TC = Q³/3 − 2Q² + 60Q + 100, the minimum value of AVC is…`, [
    `57`, `56`, `60`, `100`,
  ], `AVC = Q²/3 − 2Q + 60; derivative 2Q/3 − 2 = 0 → Q = 3; AVC = 3 − 6 + 60 = 57.`);

  /* ───────────── CHAPTER 5 · Market Structure ───────────── */
  mc(5, `A physical market differs from a digital market mainly because…`, [
    `In a physical market buyers and sellers meet in person; digital markets operate through the internet and other digital media`,
    `Physical markets exist only for services`,
    `Digital markets have no sellers`,
    `Physical markets have no price`,
  ], `The choice depends on the nature of the products and services.`);

  mc(5, `Which is NOT an assumption of a perfectly competitive market?`, [
    `Differentiated products`,
    `Large number of buyers and sellers`,
    `Free entry and exit`,
    `Perfect knowledge of market conditions`,
  ], `Products are homogeneous in perfect competition.`);

  mc(5, `In perfect competition the individual firm is a…`, [
    `Price taker`, `Price maker`, `Price leader`, `Price fixer by collusion`,
  ], `No single seller can influence the market price.`);

  mc(5, `The demand curve facing a perfectly competitive firm is…`, [
    `Horizontal at the market price (D = AR = MR = P)`, `Downward sloping`, `Vertical`, `Upward sloping`,
  ], `Because P is constant, MR = P for the competitive firm.`);

  mc(5, `Total revenue is…`, [
    `TR = P × Q`, `TR = TC + profit × Q`, `TR = MR / Q`, `TR = AC × MC`,
  ], `AR = TR/Q = P; MR = ΔTR/ΔQ.`);

  mc(5, `A competitive firm maximises short-run profit by producing where…`, [
    `MR = MC and MC is rising (slope of MC > slope of MR)`,
    `MR > MC and MC is falling`,
    `P = minimum AC only`,
    `TR = TC always`,
  ], `First-order condition MR = MC; second-order condition: MC rising.`);

  mc(5, `Using the TR–TC approach, profit is maximised where…`, [
    `The positive vertical distance between TR and TC is greatest`, `TR = TC`, `TC is lowest`, `TR is lowest`,
  ], `Profit π = TR − TC.`);

  mc(5, `A perfectly competitive firm earns a positive economic profit when…`, [
    `Price is above average cost at the equilibrium output`, `Price equals average cost`, `Price is below average cost`, `Price equals minimum AVC`,
  ], `P = AC → normal profit (zero economic profit); P < AC → loss.`);

  mc(5, `When P = AC at the profit-maximising output, the firm earns…`, [
    `Normal (zero economic) profit, the break-even point`, `Supernormal profit`, `A loss`, `Negative marginal revenue`,
  ], `Total revenue exactly covers all (economic) costs.`);

  mc(5, `The short-run shutdown point for a competitive firm is where…`, [
    `P = minimum AVC`, `P = minimum AC`, `P = MC = AC`, `P = MR = 0`,
  ], `If P > AVC but P < AC, the firm continues producing (minimises loss). If P < AVC it shuts down.`);

  mc(5, `If AVC < P < AC in the short run, the firm should…`, [
    `Continue producing and minimise its loss`, `Shut down immediately`, `Raise its price`, `Exit the industry in the short run`,
  ], `Price covers variable costs and part of fixed costs.`);

  mc(5, `The short-run supply curve of a competitive firm is…`, [
    `The rising portion of its MC curve above minimum AVC`, `The whole AC curve`, `The AFC curve`, `A horizontal line at minimum AC`,
  ], `Since P = MC at equilibrium, the firm supplies where MC lies above AVC.`);

  mc(5, `TC = 2 + 10q − 4q² + q³ and market price P = $10. The profit-maximising output is…`, [
    `q = 8/3 ≈ 2.67`, `q = 0`, `q = 2`, `q = 10`,
  ], `MC = 10 − 8q + 3q² = 10 → q(3q − 8) = 0. Only q = 8/3 satisfies the second-order condition (slope of MC = −8 + 6q = 8 > 0).`);

  mc(5, `For the same firm, the maximum profit at q = 8/3 is approximately…`, [
    `$7.48`, `$26.67`, `$19.18`, `$0`,
  ], `TR = 10 × 8/3 = 26.67; TC ≈ 19.18; π ≈ 7.48.`);

  mc(5, `For the same firm, the minimum price required to stay in the market is…`, [
    `$6`, `$10`, `$2`, `$8`,
  ], `AVC = 10 − 4q + q²; minimum at q = 2 → AVC = 10 − 8 + 4 = 6.`);

  mc(5, `TC = Q³/3 − 5Q² + 20Q + 50 and P = 4 birr. Setting MR = MC with MC rising gives output of…`, [
    `Q = 8 (the loss-minimising output)`, `Q = 2`, `Q = 5`, `Q = 10`,
  ], `MC = Q² − 10Q + 20 = 4 → Q² − 10Q + 16 = 0 → Q = 2 or 8. Slope of MC = 2Q − 10: negative at 2, positive at 8 → Q = 8.`);

  mc(5, `For TC = Q³/3 − 5Q² + 20Q + 50 and P = 4: at Q = 8, the firm makes…`, [
    `A loss of about 28.67 birr, but should still produce because P exceeds minimum AVC (1.25)`,
    `A profit of 28.67 birr`,
    `Zero profit`,
    `A loss and should shut down because P < AVC`,
  ], `TR = 32; TC = 512/3 − 320 + 160 + 50 ≈ 60.67; π ≈ −28.67. Min AVC (Q = 7.5) = 1.25 < 4 → keep producing.`);

  mc(5, `Which is a defining characteristic of pure monopoly?`, [
    `A single seller of a product with no close substitutes`, `Many sellers of identical products`, `A few interdependent firms`, `Free entry and exit`,
  ], `The firm and the industry are synonymous.`);

  mc(5, `A monopolist is a price maker because…`, [
    `It faces a downward-sloping demand curve and controls the quantity supplied`, `It faces a horizontal demand curve`, `It has many competitors`, `It sells identical products`,
  ], `Changing output changes the price it can charge.`);

  mc(5, `Which of the following is NOT a source of monopoly power listed in the module?`, [
    `Large number of rival firms`, `Legal restrictions`, `Control over key raw materials`, `Patent rights`,
  ], `Other sources: efficiency/economies of scale (natural monopoly).`);

  mc(5, `A monopoly that arises because large-scale production gives the lowest cost (economies of scale) is called a…`, [
    `Natural monopoly`, `Patent monopoly`, `Raw-material monopoly`, `Public (legal) monopoly`,
  ], `Efficiency-based monopolies are natural monopolies.`);

  mc(5, `Monopolistic competition is characterised by…`, [
    `Many sellers of differentiated products, easy entry/exit and non-price competition`,
    `A single seller`,
    `A few firms with blocked entry`,
    `Homogeneous product and price-taking behaviour`,
  ], `It blends competition (many firms, easy entry) with monopoly (differentiated products).`);

  mc(5, `Product differentiation based on packaging or advertising image rather than real quality is called…`, [
    `Fancied differentiation`, `Real differentiation`, `Perfect substitution`, `Price discrimination`,
  ], `Real differentiation involves actual differences such as quality.`);

  mc(5, `The distinguishing characteristic of oligopoly is…`, [
    `Interdependence among a few dominant firms`, `Absence of entry barriers`, `A single seller`, `Perfect knowledge and homogeneous products`,
  ], `Each firm's decisions are affected by rivals' price and output decisions.`);

  mc(5, `A special oligopoly with only two firms in the market is called a…`, [
    `Duopoly`, `Monopsony`, `Pure monopoly`, `Bilateral monopoly`,
  ], `Oligopoly firms often rely on non-price competition (advertising, warranties).`);

  mc(5, `Clothes and shoes are examples of which market structure, according to the module's summary table?`, [
    `Monopolistic competition`, `Pure competition`, `Oligopoly`, `Pure monopoly`,
  ], `Agricultural products → pure competition; steel and automobiles → oligopoly; local utilities → pure monopoly.`);

  /* ───────────── CHAPTER 6 · Fundamental Concepts of Macroeconomics ───────────── */
  mc(6, `Which is NOT listed among the goals of macroeconomics?`, [
    `Maximising the profit of each individual firm`,
    `High economic growth`,
    `Stable prices`,
    `Reducing unemployment`,
  ], `Goals: growth, full employment, price stability, reducing budget and BoP deficits, fair income distribution.`);

  mc(6, `GDP is the total value of…`, [
    `Final goods and services currently produced within a country's borders in a given period`,
    `All goods (including intermediate goods) produced by citizens abroad`,
    `Goods produced in previous years`,
    `Only exports of the country`,
  ], `GDP counts current production of final goods and services, irrespective of who owns the factors.`);

  mc(6, `The relationship between GNP and GDP is…`, [
    `GNP = GDP + net factor income from abroad (NFI)`, `GNP = GDP − depreciation`, `GNP = GDP × NFI`, `GNP = GDP + imports`,
  ], `If NFI > 0, GNP > GDP; if NFI < 0, GNP < GDP.`);

  mc(6, `Given GDP = 514,594 and net factor income from abroad = 87,348, GNP equals…`, [
    `601,942`, `427,246`, `514,594`, `87,348`,
  ], `GNP = GDP + NFI = 514,594 + 87,348 = 601,942.`);

  mc(6, `Which one is a way to avoid double counting in GDP?`, [
    `Count only final goods and services, or sum value added at each stage`,
    `Count all intermediate goods too`,
    `Include transfer payments`,
    `Count only exports`,
  ], `Intermediate goods are used up in producing other goods in the same period.`);

  mc(6, `Farmer's output 500 (no inputs); oil factory output 2,000 using 500 of the farmer's output; retailer sells for 2,500 using 2,000 of the factory's output. GDP by the value-added method is…`, [
    `2,500 (= 500 + 1,500 + 500)`, `5,000`, `4,500`, `2,000`,
  ], `Value added: farmer 500, oil factory 1,500, retailers 500 → 2,500, which equals the value of the final product. Adding outputs gives 5,000, which double counts.`);

  mc(6, `Under the expenditure approach, GDP equals…`, [
    `C + I + G + NX`, `C + S + T`, `W + R + i + π`, `NNP − indirect business taxes`,
  ], `Consumption + gross private domestic investment + government purchases + net exports.`);

  mc(6, `Consumption = 4,500; gross private domestic investment = 600; government purchases = 250; exports = 150; imports = 200. GDP is…`, [
    `5,300`, `5,350`, `5,500`, `5,100`,
  ], `NX = 150 − 200 = −50. GDP = 4,500 + 600 + 250 − 50 = 5,300.`);

  mc(6, `Government TRANSFER payments (e.g. pensions, unemployment benefits) are…`, [
    `Not included in GDP because they do not reflect current production`,
    `Included in government purchases`,
    `Included as investment`,
    `Counted twice in GDP`,
  ], `They are a mere redistribution of income.`);

  mc(6, `Gross private domestic investment minus depreciation equals…`, [
    `Net private domestic investment`, `Gross national investment`, `Government savings`, `Net exports`,
  ], `Depreciation = replacement investment.`);

  mc(6, `Which of the following is NOT a limitation of GDP measurement mentioned in the module?`, [
    `GDP perfectly reflects the quality of goods`,
    `The underground economy is not included`,
    `Non-monetised sector output is hard to value`,
    `Inadequate or unreliable data`,
  ], `GDP does not capture quality improvements well.`);

  mc(6, `Net National Product (NNP) is…`, [
    `GNP − capital consumption allowance (depreciation)`, `GDP + depreciation`, `GNP + indirect taxes`, `NI + indirect business tax − subsidies`,
  ], `NI = NNP − indirect business taxes; DI = PI − personal taxes = C + S.`);

  mc(6, `Personal disposable income (DI) is…`, [
    `Personal income less personal taxes (and equals C + S)`, `National income plus taxes`, `GNP minus depreciation`, `Personal income plus personal taxes`,
  ], `DI is split between consumption and personal saving.`);

  mc(6, `Nominal GDP is…`, [
    `The value of final output at the prices of the current year`,
    `The value of output at base-year prices`,
    `Always lower than real GDP`,
    `Adjusted for inflation`,
  ], `Real GDP values output at base-year prices; nominal GDP rises if prices rise even when output is the same.`);

  mc(6, `Year 2017 (base): X = 20 @ $5; Y = 8 @ $50. Year 2018: X = 25 @ $20; Y = 10 @ $100. The 2018 REAL GDP is…`, [
    `$625`, `$1,500`, `$500`, `$900`,
  ], `Real GDP 2018 = 25×5 + 10×50 = 125 + 500 = 625 (nominal = 25×20 + 10×100 = 1,500).`);

  mc(6, `For the same data, the 2018 GDP deflator is…`, [
    `240`, `100`, `140`, `41.7`,
  ], `Deflator = (nominal/real) × 100 = (1,500/625) × 100 = 240. The GDP deflator in the base year is always 100.`);

  mc(6, `Which statement about the CPI and the GDP deflator is TRUE?`, [
    `The CPI uses a fixed basket of consumer goods; the GDP deflator covers all domestically produced goods with changing weights`,
    `The CPI includes goods bought by firms and government`,
    `The GDP deflator includes imported goods`,
    `The CPI uses changing weights`,
  ], `Three differences: coverage (all goods produced vs consumer goods), domestic vs imported goods, fixed vs changing weights.`);

  mc(6, `Which sequence lists the four phases of the business cycle?`, [
    `Boom/peak → recession → trough → recovery/expansion`,
    `Recession → boom → depression → inflation`,
    `Peak → inflation → trough → deflation`,
    `Trough → peak → boom → recession`,
  ], `A cycle runs from one peak to the next peak or from trough to trough.`);

  mc(6, `During a recession…`, [
    `Output and income fall and unemployment rises`, `Output rises and unemployment falls`, `Unemployment is at its lowest`, `The economy operates at its peak`,
  ], `A particularly severe recession becomes a depression or trough.`);

  mc(6, `A person is classified as unemployed if he/she is…`, [
    `In the labour force, without a job and actively searching for one`,
    `Without a job, regardless of searching`,
    `Retired`,
    `A full-time student`,
  ], `Labour force = employed + unemployed.`);

  mc(6, `A recent graduate who is looking for a first job is experiencing which type of unemployment?`, [
    `Frictional`, `Structural`, `Cyclical`, `Disguised`,
  ], `Frictional: seasonal, job-switching, new entrants and re-entrants to the labour force.`);

  mc(6, `An agriculture graduate seeks a job in "Piassa", where no such jobs exist. This is…`, [
    `Structural unemployment`, `Frictional unemployment`, `Cyclical unemployment`, `Voluntary unemployment`,
  ], `Structural unemployment results from a mismatch of skills or locations, or technological change.`);

  mc(6, `Unemployment caused by deficient aggregate demand during a recession is…`, [
    `Cyclical unemployment`, `Frictional unemployment`, `Structural unemployment`, `Natural unemployment`,
  ], `Natural unemployment = frictional + structural.`);

  tf(6, `Full employment means zero unemployment.`, false,
    `Full employment exists when the unemployment rate equals the natural rate (frictional + structural), so some unemployment remains.`);

  mc(6, `Total population = 60 million; employed = 30 million; labour force = 40 million. The unemployment rate is…`, [
    `25%`, `50%`, `33%`, `16.7%`,
  ], `Unemployed = 40 − 30 = 10 million; rate = 10/40 = 25%.`);

  mc(6, `With a natural rate of unemployment of 12% and total unemployment of 25%, the cyclical unemployment rate is…`, [
    `13%`, `37%`, `12%`, `25%`,
  ], `Cyclical = total − natural = 25% − 12% = 13%.`);

  mc(6, `Inflation is…`, [
    `A sustained increase in the general price level`, `A one-time rise in the price of one good`, `A fall in the general price level`, `An increase in the quantity of money only`,
  ], `A sustained rise in the general level (not individual prices).`);

  mc(6, `"Too much money chasing too few goods" describes…`, [
    `Demand-pull inflation`, `Cost-push inflation`, `Deflation`, `Structural unemployment`,
  ], `Cost-push inflation arises from falling aggregate supply (higher wages or input prices, bad weather).`);

  mc(6, `The Fisher equation is…`, [
    `Nominal interest rate = real interest rate + inflation rate (i = r + π)`, `i = r − π`, `i = π / r`, `r = i + π`,
  ], `Higher inflation raises the nominal interest rate.`);

  mc(6, `If inflation turns out HIGHER than expected, who gains?`, [
    `Debtors (borrowers), since they repay with less valuable money`, `Creditors (lenders)`, `People on fixed pensions`, `Nobody`,
  ], `Unanticipated inflation redistributes wealth from creditors to debtors and hurts fixed-income earners.`);

  mc(6, `The costs of frequent trips to the bank to hold less cash during high inflation are called…`, [
    `Shoe-leather costs`, `Menu costs`, `Opportunity costs of capital`, `Transfer costs`,
  ], `Menu costs are the costs of changing price lists/catalogues.`);

  mc(6, `A budget deficit occurs when…`, [
    `Government spending exceeds tax revenue`, `Tax revenue exceeds government spending`, `Exports exceed imports`, `Saving exceeds investment`,
  ], `A deficit is financed by internal and external borrowing; accumulated borrowing is government debt.`);

  mc(6, `The national income accounting identity linking trade and capital flows is…`, [
    `S − I = NX (net capital outflow equals the trade balance)`, `S + I = NX`, `S − I = G`, `NX = C + I`,
  ], `If S − I and NX are negative, there is a trade deficit and the country is a net borrower.`);

  mc(6, `Monetary policy is…`, [
    `Control of the money supply and credit/interest rates, usually by the central bank`, `Government taxation and spending decisions`, `Foreign trade policy only`, `Price controls`,
  ], `Fiscal policy uses government spending, taxation and borrowing.`);

  mc(6, `Which is NOT one of the four major functions of fiscal policy in the module?`, [
    `Exchange-rate fixing`, `Allocation`, `Distribution`, `Stabilisation`,
  ], `The functions are allocation, distribution, stabilisation and development.`);

  mc(6, `Using 2005 as the base year (prices: automobile $5,000 → $6,000; bread $10 → $20; output 2010: 120 cars and 400,000 loaves), the 2010 REAL GDP is…`, [
    `$4,600,000`, `$8,720,000`, `$5,000,000`, `$7,200,000`,
  ], `Real GDP 2010 = 120 × 5,000 + 400,000 × 10 = 600,000 + 4,000,000 = 4,600,000.`);

  mc(6, `For the same data, 2010 NOMINAL GDP and the GDP deflator are…`, [
    `$8,720,000 and about 189.6 (prices ≈ 89.6% higher than in 2005)`, `$4,600,000 and 100`, `$8,720,000 and 100`, `$4,600,000 and 189.6`,
  ], `Nominal = 120 × 6,000 + 400,000 × 20 = 8,720,000. Deflator = 8,720,000/4,600,000 × 100 ≈ 189.6, i.e. the price level rose about 89.6% relative to the base year.`);
})();
