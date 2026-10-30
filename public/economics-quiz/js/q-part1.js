/* Question bank — Chapters 1–3.
   Format: mc(chapter, question, [correct, wrong, wrong, wrong], explanation)  -> first option is the correct one (shuffled at runtime)
           tf(chapter, statement, true|false, explanation) */
(function () {
  const B = (window.QB = window.QB || []);
  const mc = (ch, q, o, e) => B.push({ ch, t: "mc", q, o, e });
  const tf = (ch, q, a, e) => B.push({ ch, t: "tf", q, a, e });

  /* ───────────── CHAPTER 1 · Basics of Economics ───────────── */
  mc(1, `Which statement gives the formal, commonly accepted definition of economics?`, [
    `A social science that studies the efficient allocation of scarce resources to attain the maximum fulfilment of unlimited human needs`,
    `The study of how governments collect taxes and spend public money`,
    `The study of money, banks and the stock market only`,
    `The study of how to make the greatest possible profit in business`,
  ], `Economics is the science of choice: efficient allocation of scarce resources to satisfy unlimited human needs.`);

  mc(1, `Who is generally known as the "father of economics", and in which year did he publish "An Inquiry into the Nature and Causes of the Wealth of Nations"?`, [
    `Adam Smith, 1776`, `Alfred Marshall, 1890`, `John M. Keynes, 1936`, `David Ricardo, 1817`,
  ], `Economics as a distinct subject started with Adam Smith's book of 1776.`);

  tf(1, `There is one universally accepted definition of economics.`, false,
    `The definition is controversial: wealth, welfare, scarcity and growth definitions exist because economists view the subject from different perspectives.`);

  mc(1, `Which TWO fundamental facts provide the foundation of economics?`, [
    `Human material wants are unlimited, and economic resources are limited (scarce)`,
    `Prices are always rising, and money is scarce`,
    `Governments control markets, and firms seek profit`,
    `Resources are unlimited, and human wants are limited`,
  ], `Unlimited wants + scarce resources = the basic economic problem of scarcity and choice.`);

  mc(1, `Which of the following is a MICROeconomic topic?`, [
    `The output decision of one individual firm`,
    `The national unemployment rate`,
    `The general price level of the economy`,
    `The growth rate of national income`,
  ], `Microeconomics studies individual decision-making units (households, firms, markets). The others are aggregates, i.e. macroeconomics.`);

  mc(1, `The central problem of macroeconomics is…`, [
    `Determination of the level of national income and employment (full employment of resources)`,
    `Price determination and allocation of resources in a single market`,
    `How a consumer reaches equilibrium`,
    `How an individual firm maximises profit`,
  ], `Micro: price determination & allocation. Macro: level of income and employment.`);

  tf(1, `Microeconomics and macroeconomics are complementary; macroeconomics cannot be studied in isolation from microeconomics.`, true,
    `The module states explicitly that the two branches complement each other.`);

  mc(1, `Which of the following is a POSITIVE statement?`, [
    `The current inflation rate in Ethiopia is 12 percent.`,
    `The poor should pay no taxes.`,
    `Females ought to be given job opportunities.`,
    `The government should intervene in the economy.`,
  ], `Positive statements describe what is/was/will be and can be checked against facts. "Should/ought" statements are normative.`);

  mc(1, `Which of the following is a NORMATIVE statement?`, [
    `Females ought to be given job opportunities.`,
    `Life expectancy at birth in Ethiopia is rising.`,
    `Poverty and unemployment are big problems in Ethiopia.`,
    `The inflation rate last year was 12 percent.`,
  ], `Normative economics deals with "what ought to be" and rests on value judgments.`);

  tf(1, `A disagreement over a normative statement can be settled by simply checking the facts.`, false,
    `Normative disagreements are about value judgments and are resolved by voting/debate; disagreements on positive statements are checked against facts.`);

  mc(1, `Inductive reasoning in economics moves…`, [
    `From specific facts (particular) to a general theory`,
    `From a general axiom to a specific conclusion`,
    `From a theory to an assumption only`,
    `From the macro level to the micro level`,
  ], `Induction: facts → theory (particular to general). Deduction: general → particular.`);

  mc(1, `Which sequence correctly lists the steps of the DEDUCTIVE approach?`, [
    `Problem identification → specifying assumptions → formulating hypotheses → testing the hypotheses`,
    `Selecting problem → collecting data → classifying data → establishing cause and effect`,
    `Testing hypotheses → problem identification → assumptions → hypotheses`,
    `Data collection → hypotheses → assumptions → problem identification`,
  ], `The second option lists the steps of the inductive method.`);

  mc(1, `Which statement correctly distinguishes scarcity from shortage?`, [
    `Scarcity is a universal and everlasting problem; shortage is a specific, short-term problem at the prevailing price`,
    `Scarcity is short-term; shortage is permanent`,
    `They mean exactly the same thing`,
    `Scarcity only affects poor countries; shortage affects rich countries`,
  ], `Scarcity: resources limited relative to wants. Shortage: people cannot get the amount they want at the going price.`);

  mc(1, `A resource is a FREE resource when…`, [
    `The amount available is greater than the amount people desire at zero price (e.g. sunshine)`,
    `It is provided by the government at no cost`,
    `It is cheap to produce`,
    `It is owned by the entire society`,
  ], `Free resources are not scarce at zero price; economic resources are scarce.`);

  mc(1, `Match the factor of production to its reward. Which pairing is CORRECT?`, [
    `Capital → interest`, `Land → wage`, `Labour → rent`, `Entrepreneurship → interest`,
  ], `Labour → wage; Land → rent; Capital → interest; Entrepreneurship → profit.`);

  mc(1, `The factor of production that organises the other factors, makes basic business decisions and bears the risk of loss is…`, [
    `Entrepreneurship`, `Labour`, `Land`, `Capital`,
  ], `The reward for entrepreneurship is profit.`);

  mc(1, `Opportunity cost is best defined as…`, [
    `The value of the next best alternative that must be sacrificed to obtain one more unit of a product`,
    `The money price paid for a good`,
    `The total cost of all alternatives forgone`,
    `The cost of production divided by output`,
  ], `It is measured in goods and services forgone, not in money.`);

  mc(1, `If a given amount of resources can produce either 1 metre of cloth or 20 computers, the opportunity cost of one metre of cloth is…`, [
    `20 computers`, `1/20 of a computer`, `1 metre of cloth`, `Birr 20`,
  ], `The cost of cloth is the 20 computers that must be given up.`);

  tf(1, `Opportunity cost is always measured in money terms.`, false,
    `Opportunity cost is measured in goods and services forgone, not in money costs.`);

  mc(1, `Which of the following is NOT an assumption used to draw the production possibilities frontier (PPF)?`, [
    `Technology changes during the year`,
    `The quantity and quality of resources are fixed`,
    `The economy produces two broad classes of output`,
    `The economy operates at full employment and efficiency`,
  ], `Technology is assumed constant while the PPF is drawn.`);

  mc(1, `On a PPF diagram, a point INSIDE the frontier (like point Q) is…`, [
    `Attainable but inefficient`, `Attainable and efficient`, `Unattainable`, `Possible only with new technology`,
  ], `Points on the PPF are attainable and efficient; points outside (point R) are unattainable with current resources and technology.`);

  mc(1, `Using Table 1.1 (Food: A 500, B 420, C 320, D 180, E 0; Computers: 0, 500, 1000, 1500, 2000), the opportunity cost of one more computer when moving from B to C is…`, [
    `0.2 metric tons of food`, `0.5 metric tons of food`, `100 metric tons of food`, `5 metric tons of food`,
  ], `(420 − 320) / (1000 − 500) = 100/500 = 0.2 tons of food per computer.`);

  mc(1, `The PPF is concave (bowed outward) to the origin because of…`, [
    `The law of increasing opportunity cost – resources are not perfectly adaptable to alternative uses`,
    `The law of demand`,
    `Constant opportunity cost`,
    `Perfect substitutability of resources between goods`,
  ], `As more of one good is produced, the opportunity cost per extra unit rises (specialisation effect).`);

  mc(1, `Economic growth is represented on the PPF by…`, [
    `An outward shift of the frontier, due to more/better resources or advances in technology`,
    `A movement from one point to another along the frontier`,
    `A movement to a point inside the frontier`,
    `An inward shift of the frontier`,
  ], `Growth = increase in quantity/quality of resources and/or better technology.`);

  mc(1, `The three basic (central) economic questions every society must answer are…`, [
    `What to produce, how to produce, and for whom to produce`,
    `What to tax, whom to tax, and how much to tax`,
    `Where to produce, when to produce, and at what price`,
    `Whom to employ, whom to pay, and what to import`,
  ], `They arise because of scarcity and apply to all economic systems.`);

  mc(1, `The problem of "choice of technique" (labour-intensive vs capital-intensive methods) corresponds to which basic question?`, [
    `How to produce?`, `What to produce?`, `For whom to produce?`, `When to produce?`,
  ], `"What" = allocation of resources; "How" = choice of technique; "For whom" = distribution of national product.`);

  mc(1, `Which of the following is a main feature of a COMMAND economy?`, [
    `Collective ownership of the means of production and central economic planning`,
    `Private property rights and profit motive`,
    `Prices are the main mechanism that solves economic problems`,
    `Minimal government role limited to defence and law and order`,
  ], `The other three are features of capitalism.`);

  mc(1, `The principle of "consumer sovereignty" belongs mainly to which economic system?`, [
    `Capitalist (free market) economy`, `Command economy`, `Traditional subsistence economy`, `None of them`,
  ], `In capitalism, producers produce according to the wishes of consumers, who are free to choose.`);

  mc(1, `Which of the following is a recognised DISADVANTAGE of capitalism?`, [
    `Inequality of income and negative externalities such as pollution`,
    `Absence of any private property`,
    `Absence of automatic price determination`,
    `Red-tapism caused by complete government control`,
  ], `The last two are disadvantages of the command economy.`);

  mc(1, `A mixed economy…`, [
    `Combines features of capitalism and command economy, allowing public and private sectors to co-exist`,
    `Has only a public sector`,
    `Has no government role in prices`,
    `Is another name for a pure free-market economy`,
  ], `It attempts to combine the advantages of both systems.`);

  mc(1, `In the two-sector circular flow model, in which market do households SELL factors of production to firms?`, [
    `The factor (input) market`, `The product market`, `The money market`, `The foreign exchange market`,
  ], `Product market: firms sell goods to households. Factor market: households sell labour, land and capital to firms.`);

  mc(1, `In a closed economy the three decision-making units are…`, [
    `Households, firms and the government`,
    `Households, banks and the central bank`,
    `Firms, banks and the government`,
    `Consumers, importers and exporters`,
  ], `Households (sell resources, buy goods), firms (buy resources, sell goods), government (provides public goods, collects taxes).`);

  mc(1, `The main source of revenue for the government in the three-sector circular flow model is…`, [
    `Taxes collected from households and firms`, `Sales of factors of production`, `Subsidies`, `Wages paid to households`,
  ], `The government uses tax revenue to buy goods and services, hire factors, and give subsidies and income support.`);

  mc(1, `In the review-question table (Good X: 0, 2, 4, 6; Good Y: 100, 90, 60, 20 for points A–D), what is the opportunity cost of one unit of X when moving from B to C?`, [
    `15 units of Y`, `5 units of Y`, `20 units of Y`, `30 units of Y`,
  ], `B→C: ΔY = 90 − 60 = 30 for ΔX = 2 → 15 units of Y per unit of X. (A→B = 5, C→D = 20; the rising trend is the law of increasing opportunity cost.)`);

  /* ───────────── CHAPTER 2 · Theory of Demand and Supply ───────────── */
  mc(2, `In economics, "demand" means…`, [
    `The desire for a commodity backed by purchasing power (willing AND able to buy)`,
    `Any wish to own a commodity`,
    `The quantity actually sold in the market`,
    `The ability to pay, even without willingness`,
  ], `Both willingness and ability to pay are essential.`);

  mc(2, `The law of demand states that, ceteris paribus, the price of a commodity and the quantity demanded are…`, [
    `Inversely related`, `Directly related`, `Unrelated`, `Related only for luxury goods`,
  ], `As price rises (falls), quantity demanded falls (rises).`);

  tf(2, `A change in the price of a good itself causes a SHIFT of its demand curve.`, false,
    `A change in own price causes a movement along the same demand curve (change in quantity demanded). Non-price determinants shift the curve (change in demand).`);

  mc(2, `Which of the following will shift the demand curve for a good?`, [
    `A change in consumers' income`, `A change in the price of the good itself`, `A movement from point A to B along the curve`, `A change in quantity demanded`,
  ], `Demand shifters: tastes, income, prices of related goods, expectations, number of buyers.`);

  mc(2, `A good whose demand falls when consumers' income rises is called a(n)…`, [
    `Inferior good`, `Normal good`, `Complementary good`, `Substitute good`,
  ], `Normal goods: demand rises with income. Inferior goods: demand moves inversely with income.`);

  mc(2, `If the price of coffee rises, the demand for tea (a substitute) will…`, [
    `Increase`, `Decrease`, `Stay unchanged`, `Fall to zero`,
  ], `For substitutes, the price of one and the demand for the other are directly related.`);

  mc(2, `If the price of fuel rises, the demand for cars (complements) will…`, [
    `Decrease`, `Increase`, `Be unchanged`, `Become perfectly elastic`,
  ], `For complements, the price of one and the demand for the other are inversely related.`);

  mc(2, `From Table 2.1, point A (P = 5, Q = 5) and point B (P = 4, Q = 7) give a demand function of…`, [
    `Q = 15 − 2P`, `Q = 5 − 2P`, `Q = 15 + 2P`, `Q = 7 − 2P`,
  ], `Slope b = (7−5)/(4−5) = −2. Then 7 = a − 2(4) → a = 15.`);

  mc(2, `An individual demand function is Q = 20 − 2P, and there are 100 identical buyers. The market demand function is…`, [
    `Q = 2000 − 200P`, `Q = 20 − 200P`, `Q = 2000 − 2P`, `Q = 120 − 102P`,
  ], `Market demand is the horizontal sum: multiply the quantity by 100.`);

  mc(2, `Market demand is derived from individual demands by…`, [
    `Adding quantities demanded at each price (horizontal summation)`,
    `Adding prices at each quantity (vertical summation)`,
    `Averaging the prices`,
    `Multiplying price by quantity`,
  ], `Quantities are added horizontally at each price.`);

  mc(2, `In Table 2.2, at a price of 3 the three consumers demand 5, 7 and 2 units respectively. Market demand at P = 3 is…`, [
    `14`, `7`, `10`, `21`,
  ], `5 + 7 + 2 = 14.`);

  mc(2, `If consumers expect the price of a good to RISE in the future, current demand will tend to…`, [
    `Increase`, `Decrease`, `Remain unchanged`, `Fall to zero`,
  ], `Higher expected future price increases present demand.`);

  mc(2, `Price elasticity of demand is computed as…`, [
    `% change in quantity demanded ÷ % change in price`,
    `% change in price ÷ % change in quantity demanded`,
    `Change in quantity ÷ change in income`,
    `Change in price × change in quantity`,
  ], `It measures the responsiveness of quantity demanded to a change in the good's own price.`);

  mc(2, `Price rises from Br. 5 to Br. 4 and quantity demanded rises from 100 to 110 units. The arc elasticity is approximately…`, [
    `−0.43 (inelastic)`, `−3 (elastic)`, `−1 (unitary)`, `−2.33 (elastic)`,
  ], `Ed = [(110−100)/(100+110)] ÷ [(4−5)/(5+4)] = (10/210)/(−1/9) = −9/21 = −3/7 ≈ −0.43.`);

  mc(2, `If |Ed| > 1, demand is said to be…`, [
    `Elastic`, `Inelastic`, `Unitary elastic`, `Perfectly inelastic`,
  ], `0 < |Ed| < 1 inelastic; |Ed| = 1 unitary; |Ed| = 0 perfectly inelastic; |Ed| = ∞ perfectly elastic.`);

  mc(2, `Which factor makes demand MORE price elastic?`, [
    `The availability of many close substitutes`,
    `The good is a basic necessity such as salt`,
    `A very small share of the consumer's income is spent on the good`,
    `A very short time period after the price change`,
  ], `More substitutes, luxury status, large income share and a longer time horizon all raise elasticity.`);

  mc(2, `Why is the quantity of salt demanded relatively unresponsive to price changes?`, [
    `It is a necessity with few substitutes and takes a small share of income`,
    `It is a luxury good`,
    `It has many close substitutes`,
    `It is an inferior good`,
  ], `Necessities are price-inelastic.`);

  mc(2, `Quantity demanded rises from 50 to 60 when income rises from Br. 10,000 to Br. 20,000 (Review Q7). The income elasticity of demand is…`, [
    `0.2 – a normal good (necessity)`, `5 – a luxury good`, `−0.2 – an inferior good`, `1 – unitary`,
  ], `E = (ΔQ/ΔI)(I/Q) = (10/10,000)(10,000/50) = 0.2: positive but below 1 → a normal good that is a necessity.`);

  mc(2, `A NEGATIVE income elasticity of demand indicates that the good is…`, [
    `Inferior`, `A luxury`, `A necessity`, `A substitute`,
  ], `Ei < 0: demand falls as income rises.`);

  mc(2, `The cross-price elasticity of demand between two SUBSTITUTE goods is…`, [
    `Positive`, `Negative`, `Zero`, `Infinite`,
  ], `Substitutes: positive; complements: negative; unrelated goods: zero.`);

  mc(2, `When the price of Y rises from 10 to 15, the quantity demanded of X falls from 1500 to 1000. The cross-price elasticity is about…`, [
    `−0.67, so X and Y are complements`, `+0.67, so X and Y are substitutes`, `−1.5, so X and Y are substitutes`, `0, so X and Y are unrelated`,
  ], `[(1000−1500)/5] × [10/1500] = −100 × 0.00667 = −0.67 → negative → complements.`);

  mc(2, `When the price of tea rises from Br. 10 to Br. 15, demand for coffee rises from 3000 to 5000 cups (Review Q8). The cross elasticity is about…`, [
    `+1.33, so tea and coffee are substitutes`, `−1.33, so they are complements`, `+0.75, so they are complements`, `0.5, so they are unrelated`,
  ], `[(5000−3000)/3000] ÷ [(15−10)/10] = 0.667/0.5 ≈ 1.33 > 0 → substitutes.`);

  mc(2, `The law of supply states that, ceteris paribus, price and quantity supplied are…`, [
    `Positively (directly) related`, `Inversely related`, `Unrelated`, `Related only in the long run`,
  ], `Higher prices induce producers to supply more.`);

  mc(2, `An increase in the price of inputs (labour, raw materials) will cause the supply curve to…`, [
    `Shift to the left (supply decreases)`, `Shift to the right`, `Stay unchanged`, `Become vertical`,
  ], `Higher costs of production reduce supply at every price.`);

  mc(2, `Technological advancement and good weather (for agricultural products) will…`, [
    `Shift the supply curve to the right`, `Shift the supply curve to the left`, `Cause a movement up the supply curve`, `Reduce market supply`,
  ], `They allow more output at each price.`);

  mc(2, `A perfectly inelastic supply curve is…`, [
    `A vertical line`, `A horizontal line`, `A 45° line through the origin`, `Downward sloping`,
  ], `Quantity supplied does not respond to price (zero elasticity). A horizontal line is perfectly elastic.`);

  mc(2, `Market demand is Qd = 100 − 2P and market supply is P = Qs/2 + 10 (i.e. Qs = 2P − 20). The equilibrium price and quantity are…`, [
    `P = 30, Q = 40`, `P = 25, Q = 50`, `P = 35, Q = 30`, `P = 40, Q = 20`,
  ], `100 − 2P = 2P − 20 → 4P = 120 → P = 30; Q = 100 − 60 = 40.`);

  mc(2, `For the same market, at P = 25 the market has…`, [
    `A shortage of 20 units`, `A surplus of 20 units`, `A shortage of 10 units`, `Equilibrium`,
  ], `Qd = 50, Qs = 30 → shortage of 20.`);

  mc(2, `For the same market, at P = 35 the market has…`, [
    `A surplus of 20 units`, `A shortage of 20 units`, `A surplus of 40 units`, `Equilibrium`,
  ], `Qd = 30, Qs = 50 → surplus of 20; price will fall.`);

  mc(2, `Supply is constant and demand INCREASES. The new equilibrium has…`, [
    `Higher price and higher quantity`, `Lower price and higher quantity`, `Higher price and lower quantity`, `Lower price and lower quantity`,
  ], `The demand curve shifts right along an upward-sloping supply curve.`);

  mc(2, `Demand is constant and supply INCREASES. The new equilibrium has…`, [
    `Lower price and higher quantity`, `Higher price and higher quantity`, `Higher price and lower quantity`, `Lower price and lower quantity`,
  ], `The supply curve shifts right along a downward-sloping demand curve.`);

  mc(2, `Demand and supply both increase by the same proportion. Equilibrium quantity ______ and price ______.`, [
    `Increases; stays the same`, `Increases; rises`, `Increases; falls`, `Stays the same; rises`,
  ], `Quantity rises definitely. Price rises if demand increases more, falls if supply increases more, and is unchanged if equal.`);

  mc(2, `Market demand is Qd = 50 − P and market supply is P = Qs + 5. The equilibrium price and quantity are…`, [
    `P = 27.5, Q = 22.5`, `P = 25, Q = 25`, `P = 30, Q = 20`, `P = 22.5, Q = 27.5`,
  ], `Qs = P − 5. 50 − P = P − 5 → P = 27.5, Q = 22.5.`);

  mc(2, `At the equilibrium above (P = 27.5, Q = 22.5), the price elasticity of demand (Qd = 50 − P) is approximately…`, [
    `−1.22 (elastic)`, `−0.82 (inelastic)`, `−1 (unitary)`, `−2.2 (elastic)`,
  ], `E = (dQ/dP)(P/Q) = (−1)(27.5/22.5) ≈ −1.22 → |E| > 1, elastic.`);

  mc(2, `The demand for cinema tickets is D(p) = 200,000 − 10,000p. At p = 12 birr, price elasticity of demand is…`, [
    `−1.5 (elastic)`, `−0.67 (inelastic)`, `−12`, `−0.15`,
  ], `Q = 200,000 − 120,000 = 80,000. E = (−10,000)(12/80,000) = −1.5.`);

  mc(2, `Ten identical consumers each have the demand curve P = 101 − 10Qi. The market demand curve is…`, [
    `Q = 101 − P  (and at P = $1 the market buys 100 cups)`, `Q = 10.1 − P`, `Q = 1010 − 10P`, `Q = 101 − 10P`,
  ], `Qi = (101 − P)/10, so Q = 10·Qi = 101 − P. At P = 1: each buys 10 cups, the market 100 cups.`);

  mc(2, `Which is a recognised exception to the law of demand mentioned in the chapter summary?`, [
    `Giffen goods`, `Normal goods`, `Substitute goods`, `Complementary goods`,
  ], `The module notes Giffen goods — goods whose demand falls with a fall in their price.`);

  /* ───────────── CHAPTER 3 · Theory of Consumer Behaviour ───────────── */
  mc(3, `Utility is…`, [
    `The satisfaction or pleasure a consumer derives from consuming a good or service`,
    `The physical usefulness of a product`,
    `The price of a product`,
    `The cost of producing a product`,
  ], `Utility is consumer-centric; usefulness is product-centric.`);

  tf(3, `"Utility" and "usefulness" are synonymous.`, false,
    `Picasso paintings may be functionally useless but give great utility to art lovers. Utility is subjective and consumer-centric.`);

  mc(3, `If a consumer is indifferent between bundles X and Y, we write…`, [
    `X ~ Y`, `X ≻ Y`, `X ≺ Y`, `X > Y`,
  ], `"≻" means strict preference; "~" means indifference; "≿" means weak preference.`);

  mc(3, `If X ≿ Y and Y ≿ X, we conclude that…`, [
    `The consumer is indifferent between X and Y`, `X is strictly preferred to Y`, `Y is strictly preferred to X`, `The preferences are inconsistent`,
  ], `Each is at least as good as the other → indifference.`);

  mc(3, `The basic difference between the cardinal and ordinal approaches is that…`, [
    `Cardinalists say utility can be measured in utils; ordinalists say it can only be ranked`,
    `Cardinalists use indifference curves; ordinalists use utils`,
    `Ordinalists believe utility is measurable in numbers`,
    `Cardinalists ignore the budget constraint`,
  ], `Ordinal theory = indifference curve approach.`);

  mc(3, `Which is NOT an assumption of the cardinal utility theory?`, [
    `Marginal rate of substitution is diminishing`,
    `Consumers are rational`,
    `Marginal utility of money is constant`,
    `Marginal utility of a commodity diminishes as more is consumed`,
  ], `Diminishing MRS belongs to the ordinal approach.`);

  mc(3, `Marginal utility is…`, [
    `The change in total utility from consuming one more unit (ΔTU/ΔQ)`,
    `Total utility divided by quantity`,
    `The utility of the first unit only`,
    `The price of the last unit`,
  ], `MU is the slope of the total utility curve.`);

  mc(3, `When total utility is at its MAXIMUM, marginal utility is…`, [
    `Zero`, `Positive and rising`, `Negative`, `At its highest`,
  ], `TU rises while MU > 0, peaks when MU = 0, and falls when MU < 0.`);

  mc(3, `In Table 3.1, TU is 0, 10, 18, 24, 28, 30, 30, 28 for 0–7 units. The marginal utility of the 4th unit and the quantity at which TU is maximised are…`, [
    `MU₄ = 4; TU maximum at 5–6 units (MU = 0 at the 6th unit)`, `MU₄ = 28; maximum at 7 units`, `MU₄ = 6; maximum at 4 units`, `MU₄ = 2; maximum at 3 units`,
  ], `MU₄ = 28 − 24 = 4. TU stays at 30 from the 5th to the 6th unit, where MU = 0.`);

  mc(3, `The law of diminishing marginal utility states that as consumption of a commodity per unit time increases…`, [
    `The extra satisfaction from each successive unit decreases`,
    `Total utility always decreases`,
    `Marginal utility becomes constant`,
    `Marginal utility increases then falls`,
  ], `The first banana gives more MU than the second, and so on.`);

  mc(3, `A consumer buying only one good X is in equilibrium when…`, [
    `MUx = Px`, `MUx > Px`, `MUx < Px`, `TUx = Px`,
  ], `If MUx > Px the consumer should buy more; if MUx < Px, less.`);

  mc(3, `With two goods, a cardinal-utility consumer is in equilibrium when…`, [
    `MUx/Px = MUy/Py and the whole income is spent (Px·X + Py·Y = M)`,
    `MUx = MUy`,
    `Px = Py`,
    `TUx = TUy`,
  ], `Marginal utility per birr must be equal across goods, and the budget exhausted.`);

  mc(3, `Saron has 7 birr; banana costs 1 birr, bread costs 4 birr (Table 3.2). Her equilibrium bundle is…`, [
    `3 bananas and 1 loaf of bread (TU = 26)`, `1 banana and 1 loaf (TU = 18)`, `5 bananas and 0 bread`, `2 bananas and 2 loaves`,
  ], `MU/P is 3 for both goods (banana 3rd unit: 3/1; bread 1st: 12/4); spending 3×1 + 1×4 = 7. TU = 14 + 12 = 26.`);

  mc(3, `A limitation of the cardinal approach is…`, [
    `Utility cannot be measured objectively and the MU of money is not constant`,
    `It ignores diminishing marginal utility`,
    `It requires indifference curves`,
    `It assumes consumers are irrational`,
  ], `Both the measurability assumption and the constant MU of money are criticised.`);

  mc(3, `The ordinal (indifference curve) approach assumes that…`, [
    `Consumers can rank bundles by preference and preferences are consistent (transitive)`,
    `Utility is measured in utils`,
    `Marginal utility of money is constant`,
    `Consumers cannot rank their preferences`,
  ], `Consumers need only order bundles: 1st, 2nd, 3rd.`);

  mc(3, `An indifference curve shows…`, [
    `Different combinations of two goods that give the consumer the same level of satisfaction`,
    `All bundles the consumer can afford`,
    `The relation between price and quantity`,
    `The consumer's income`,
  ], `A set of indifference curves is an indifference map.`);

  mc(3, `Which is NOT a property of standard indifference curves?`, [
    `They are concave to the origin`,
    `They slope downward`,
    `They are convex to the origin`,
    `They do not intersect`,
  ], `They are convex (a reflection of diminishing MRS), not concave.`);

  mc(3, `Why can two indifference curves NOT intersect?`, [
    `It would violate the assumptions of consistency and transitivity of preferences`,
    `Because the budget line prevents it`,
    `Because prices are fixed`,
    `Because income is limited`,
  ], `At the intersection point, bundles of different utility levels would be indifferent to one another.`);

  mc(3, `Between two indifference curves, the one farther from the origin represents…`, [
    `A higher level of satisfaction`, `A lower level of satisfaction`, `The same level of satisfaction`, `A larger budget`,
  ], `More of both goods is preferred.`);

  mc(3, `The marginal rate of substitution of X for Y (MRSxy) is…`, [
    `The number of units of Y given up per extra unit of X, keeping utility constant (= MUx/MUy)`,
    `Px/Py`,
    `The change in income per unit of X`,
    `The ratio of total utilities`,
  ], `MRSxy = −ΔY/ΔX = MUx/MUy along an indifference curve.`);

  mc(3, `The convex shape of an indifference curve reflects…`, [
    `Diminishing marginal rate of substitution`, `Increasing marginal rate of substitution`, `Constant MRS`, `Perfect substitutability`,
  ], `The more X the consumer has, the less Y she is willing to give up for another unit of X.`);

  mc(3, `For U(X, Y) = X⁴Y², the marginal rate of substitution MRSxy equals…`, [
    `2Y/X`, `X/2Y`, `4X³Y²`, `2X⁴Y`,
  ], `MUx = 4X³Y², MUy = 2X⁴Y → MUx/MUy = 4X³Y²/2X⁴Y = 2Y/X.`);

  mc(3, `The budget line for income M and prices Px, Py has the equation…`, [
    `Y = M/Py − (Px/Py)X`, `Y = M/Px − (Py/Px)X`, `Y = M·Py − Px·X`, `Y = (M − Px)/Py`,
  ], `From M = Px·X + Py·Y. Its slope is −Px/Py.`);

  mc(3, `A consumer has $100; Px = $3 and Py = $5. The intercepts of the budget line are…`, [
    `Y-axis: 20, X-axis: 33.3`, `Y-axis: 33.3, X-axis: 20`, `Y-axis: 100, X-axis: 100`, `Y-axis: 5, X-axis: 3`,
  ], `M/Py = 100/5 = 20; M/Px = 100/3 ≈ 33.3. Equation: Y = 20 − (3/5)X.`);

  mc(3, `An increase in consumer income, prices unchanged, causes the budget line to…`, [
    `Shift outward parallel to the original (slope unchanged)`, `Rotate around the Y-intercept`, `Shift inward`, `Become steeper`,
  ], `Income affects intercepts, not the price ratio, so the slope does not change.`);

  mc(3, `If only the price of good X falls (Py and M unchanged), the budget line…`, [
    `Pivots outward on the X-axis, becoming flatter`, `Shifts inward in parallel`, `Pivots upward on the Y-axis`, `Does not change`,
  ], `The horizontal intercept M/Px rises; the vertical intercept stays the same.`);

  mc(3, `With $100 income and Px = 3, Py = 5, what happens to the budget line if the budget falls by 25%?`, [
    `It shifts inward in parallel; intercepts become X = 25 and Y = 15`, `It pivots; X = 33.3 and Y = 15`, `It stays the same`, `It shifts outward`,
  ], `M = 75 → 75/3 = 25 and 75/5 = 15.`);

  mc(3, `A consumer reaches equilibrium (ordinal approach) at the point where…`, [
    `The budget line is tangent to the highest attainable indifference curve (MRSxy = Px/Py)`,
    `The indifference curve crosses the budget line twice`,
    `The consumer spends nothing`,
    `The indifference curve lies entirely below the budget line`,
  ], `At the tangency, MUx/MUy = Px/Py.`);

  mc(3, `U(X,Y) = XY + 2X; Px = 4, Py = 2, M = 60. The utility-maximising bundle and MRSxy at the optimum are…`, [
    `X = 8, Y = 14, MRSxy = 2`, `X = 14, Y = 8, MRSxy = 2`, `X = 10, Y = 10, MRSxy = 1`, `X = 8, Y = 14, MRSxy = 0.5`,
  ], `MUx = Y + 2, MUy = X. (Y+2)/X = 4/2 → Y = 2X − 2. Budget: 4X + 2(2X−2) = 60 → X = 8, Y = 14. MRS = Px/Py = 2.`);

  mc(3, `A consumer has 8 birr; Pa = 2, Pb = 1. MU of A: 36, 24, 20, 18, 16, 10 and MU of B: 30, 22, 16, 12, 10, 4 for units 1–6. The utility-maximising bundle and total utility are…`, [
    `2 units of A and 4 units of B; TU = 140`, `3 units of A and 2 units of B; TU = 112`, `4 units of A and 0 of B; TU = 98`, `1 unit of A and 6 units of B; TU = 130`,
  ], `MU/P: A = 18, 12, 10, 9…; B = 30, 22, 16, 12… Buying the best per-birr units until 8 birr is spent gives A=2, B=4 (MU/P = 12 for both). TU = (36+24) + (30+22+16+12) = 140.`);
})();
