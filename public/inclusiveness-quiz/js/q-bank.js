/* Inclusiveness (SNIE 1012) — question bank, Chapters 1–3. Source: AAU Inclusiveness module handouts (2024) and slides.
   mc(chapter, question, [correct, wrong, wrong, wrong], explanation)  -> first option is correct (shuffled at runtime)
   tf(chapter, statement, true|false, explanation) */
(function () {
  const B = (window.QB = window.QB || []);
  const mc = (ch, q, o, e) => B.push({ ch, t: "mc", q, o, e });
  const tf = (ch, q, a, e) => B.push({ ch, t: "tf", q, a, e });

  /* ───────────── CHAPTER 1 · Concepts and Principles of Inclusion ───────────── */
  mc(1, `According to the module, inclusion is fundamentally the principle that all people are entitled to…`, [
    `Full membership of the human family and full participation in all aspects of society`,
    `Special care in separate facilities away from the community`,
    `Medical treatment before they can join society`,
    `Participation only where they have first adapted to the system`,
  ], `Inclusion means full membership of the human family: we are all entitled to participate fully, have the same rights and responsibilities, and have something to contribute.`);

  mc(1, `Which is NOT one of the three statements that make up the fundamental principle of inclusion?`, [
    `Some people should be educated separately for their own good`,
    `We are all entitled to participate fully in all aspects of society`,
    `We all have the same rights and responsibilities`,
    `We all have something to contribute`,
  ], `The three statements are full participation, same rights and responsibilities, and something to contribute. Separation is the opposite of inclusion.`);

  mc(1, `Inclusion is described as the right of the individual and…`, [
    `The responsibility of society as a whole`,
    `The responsibility of the family only`,
    `The responsibility of persons with disabilities only`,
    `The responsibility of the health sector only`,
  ], `"Inclusion is the right of the individual and the responsibility of society as a whole."`);

  tf(1, `Inclusion is a one-time project that is finished once a policy has been written.`, false,
    `Inclusion is a continuing process: inclusive policy/legal frameworks, then inclusive culture, then inclusive practice.`);

  mc(1, `Which sequence lists the three organically linked steps of the inclusion process?`, [
    `Inclusive policy/legal frameworks → inclusive culture → inclusive practice`,
    `Inclusive practice → inclusive policy → inclusive culture`,
    `Inclusive culture → charity → inclusive policy`,
    `Rehabilitation → integration → special schools`,
  ], `Frameworks (policy and law), culture (in communities and institutions), and practice are the three linked steps.`);

  mc(1, `Which is one of the three dimensions for effective implementation of inclusive services?`, [
    `Creating a non-discriminatory attitude within communities towards persons with disabilities and other vulnerable groups`,
    `Building special institutions for every type of impairment`,
    `Curing impairments before participation`,
    `Providing charity to persons with disabilities`,
  ], `The three dimensions: non-discriminatory attitude; accessible, barrier-free physical and service environments; and empowering the physical and psychosocial capacity of persons with disabilities.`);

  mc(1, `Which of these is NOT listed in the WHO (2001) description of the environment in relation to disability?`, [
    `Genetic inheritance`,
    `Technology and products`,
    `Social support and relationships`,
    `Policy, systems and services`,
  ], `WHO environment factors: technology and product; natural environment and human-made change to it; social support and relationships; attitude; policy, system and services.`);

  mc(1, `"Whatever benefits accrue to members of a society are the heritage of all people, not just those who are able-bodied." This statement describes the principle of inclusion as the opposite of…`, [
    `Exclusion and alienation`,
    `Diversity`,
    `Equity`,
    `Collaboration`,
  ], `The principle of inclusion is simple: it is the opposite of exclusion and also alienation.`);

  mc(1, `How many key principles of inclusion does the module list?`, [`7`, `5`, `10`, `3`], `Seven: respect for diversity, equal access and opportunity, active participation, supportive environment, collaboration and partnership, adaptability and flexibility, continuous learning and improvement.`);

  mc(1, `The principle "Actively seek input from underrepresented or marginalized groups so that their voices are heard" belongs under…`, [
    `Active participation`,
    `Adaptability and flexibility`,
    `Respect for diversity`,
    `Continuous learning and improvement`,
  ], `Active participation: create spaces where everyone is encouraged to contribute and seek input from marginalized groups.`);

  mc(1, `Being willing to adjust policies, practices and environments and accommodating different learning styles and communication needs reflects which principle?`, [
    `Adaptability and flexibility`,
    `Equal access and opportunity`,
    `Supportive environment`,
    `Collaboration and partnership`,
  ], `Adaptability and flexibility: adjust policies, practices and environments to meet the needs of all individuals.`);

  mc(1, `Which is one of the ten key elements of inclusion?`, [
    `Accountability`, `Charity`, `Segregation`, `Dependency`,
  ], `The ten elements: equity, diversity, belonging, respect, collaboration, representation, accessibility, cultural competence, open communication and accountability.`);

  mc(1, `Which element of inclusion is defined as "ensuring fair treatment, opportunities and access to resources for everyone, while recognising and addressing specific needs and disparities"?`, [
    `Equity`, `Representation`, `Belonging`, `Open communication`,
  ], `Equity is about fairness while addressing specific needs and disparities. Representation concerns diverse voices in decision-making.`);

  mc(1, `The element "Accessibility" includes all of the following EXCEPT…`, [
    `Charity-based provision`,
    `Universal design`,
    `Reasonable accommodation`,
    `Non-discrimination, acceptability and adaptability`,
  ], `Accessibility includes Universal Design, Reasonable Accommodation, non-discrimination, acceptability and adaptability.`);

  mc(1, `Holding individuals and organisations responsible for creating and maintaining an inclusive environment, including addressing bias and discrimination, is the element of…`, [
    `Accountability`, `Cultural competence`, `Collaboration`, `Respect`,
  ], `Accountability is the responsibility for maintaining inclusion, including addressing bias and discrimination.`);

  mc(1, `An inclusive environment acknowledges individual difference as…`, [
    `A source of richness and diversity, not a problem`,
    `A problem to be corrected`,
    `A medical condition to be cured`,
    `A reason for separate services`,
  ], `An inclusive environment believes difference is a source of richness and diversity.`);

  tf(1, `Inclusion promotes innovation and creativity because diverse perspectives lead to better problem-solving and decision-making.`, true,
    `This is one of the reasons the module gives for why inclusion is important.`);

  mc(1, `The statement "Segregation teaches individuals to be fearful, ignorant and breeds prejudice" is part of which foundation for inclusion?`, [
    `Social foundation`, `Educational foundation`, `Legal foundation`, `Economic foundation`,
  ], `Social foundation: only inclusion has the potential to reduce fear and build friendship, respect and understanding.`);

  mc(1, `"Inclusive education is more cost-effective than creating special schools across the country" is part of which foundation?`, [
    `Economic foundation`, `Social foundation`, `Legal foundation`, `Educational foundation`,
  ], `Economic foundation: cost-effectiveness, local schools, less repetition and dropout, and better employment for persons with disabilities.`);

  mc(1, `Which is an educational foundation for inclusion?`, [
    `Children do better academically, psychologically and socially in inclusive settings`,
    `All individuals have the right to learn and live together`,
    `Children with disabilities live with their family and use community infrastructure`,
    `There are no legitimate reasons to separate children`,
  ], `The first is educational; the second and fourth are legal foundations; the third is economic.`);

  mc(1, `"Human beings shouldn't be devalued or discriminated against by being excluded or sent away because of their disability" supports which foundation?`, [
    `Legal foundation`, `Economic foundation`, `Educational foundation`, `Social foundation`,
  ], `Legal foundation: all individuals have the right to learn and live together.`);

  /* ───────────── CHAPTER 2 · Challenges, History and Context of Exclusion ───────────── */
  mc(2, `According to WHO (2011), roughly what share of the world's population lives with some form of disability?`, [
    `About 15 % (over one billion people)`, `About 1.5 %`, `About 40 %`, `About 5 %`,
  ], `More than one billion persons, about 15 % of the world's population.`);

  mc(2, `Where do the majority (about 80 %) of persons with disabilities live?`, [
    `Low- and middle-income countries`, `High-income countries`, `Only in urban areas`, `In countries at war`,
  ], `80 % live in low- and middle-income countries, and disability disproportionately affects the most disadvantaged.`);

  mc(2, `What percentage of Ethiopia's population is estimated (WHO, 2011) to live with various types of impairments?`, [
    `17.6 %`, `7.6 %`, `27.6 %`, `1.76 %`,
  ], `WHO (2011) estimate quoted in the module: 17.6 %.`);

  mc(2, `According to the Federal Ministry of Education statistics for 2022/2023, what share of school-age children with disabilities in Ethiopia are out of school?`, [
    `More than 89 %`, `About 9 %`, `About 49 %`, `About 29 %`,
  ], `More than 89 % are out of school, even though Ethiopia ratified the CRPD in 2010.`);

  mc(2, `When was the UN Convention on the Rights of Persons with Disabilities adopted, and when did Ethiopia ratify it?`, [
    `Adopted 2006; ratified by Ethiopia on 1 June 2010`,
    `Adopted 1993; ratified 2000`,
    `Adopted 1994; ratified 2004`,
    `Adopted 1989; ratified 1991`,
  ], `UN CRPD: 2006. Ethiopia ratified it on June 1st, 2010.`);

  tf(2, `Disability causes poverty, and poverty also makes people more likely to become disabled.`, true,
    `WHO (2011): people with disabilities are more likely to experience poverty, because disability causes poverty and poor people are more likely to become disabled.`);

  mc(2, `Which best defines "impairment" in the module?`, [
    `The purely factual absence or loss of functioning in a body part`,
    `Disadvantage caused by an inaccessible society`,
    `A social status given by the community`,
    `A violation of human rights`,
  ], `Impairment is the physical condition (e.g. visual, hearing, physical, intellectual). Disability results when barriers prevent participation.`);

  mc(2, `Which statement best describes "disability" in the UN CRPD preamble?`, [
    `Disability results from the interaction between persons with impairments and attitudinal and environmental barriers`,
    `Disability is a punishment for sin`,
    `Disability is a purely medical condition inside the person`,
    `Disability is the same as impairment`,
  ], `Disability is "an evolving concept" resulting from the interaction between impairment and barriers that hinder full and effective participation on an equal basis with others.`);

  tf(2, `In low-income countries, many people still believe impairment is caused by a curse, sin or the wrath of God.`, true,
    `The module notes this lack of proper understanding of the cause of impairment, including in Ethiopia.`);

  mc(2, `Scientific research classifies the causes of impairment into which two major categories?`, [
    `Biological and environmental`, `Medical and social`, `Congenital and charity`, `Physical and economic`,
  ], `Biological (genetic factors, pre-term and underweight birth) and environmental (poverty, malnutrition, infection, toxins, accidents, war).`);

  mc(2, `Which is a biological cause of impairment?`, [
    `Abnormalities in genes (e.g. Down syndrome)`,
    `Landmines`,
    `Lead and mercury poisoning`,
    `Car accidents`,
  ], `Genetic abnormalities, over-exposure to X-rays and pre-term or underweight birth are biological. Landmines, toxins and accidents are environmental.`);

  mc(2, `Which is an environmental cause of impairment?`, [
    `Rubella or syphilis in a pregnant mother`,
    `Down syndrome from gene abnormality`,
    `Genetic inheritance`,
    `Pre-term birth only`,
  ], `Drugs, alcohol, tobacco and infections such as toxoplasmosis, cytomegalovirus, rubella and syphilis during pregnancy are environmental causes.`);

  mc(2, `Dyslexia, dysgraphia and dyscalculia are examples of…`, [
    `Specific learning disability`, `Hearing impairment`, `Emotional and behavioural disorder`, `Multiple impairment`,
  ], `Specific Learning Disability includes dyslexia (reading), dysgraphia (writing) and dyscalculia (mathematics).`);

  mc(2, `Deaf-blindness is classified in the module as…`, [
    `Multiple impairment`, `Visual impairment only`, `Speech and language impairment`, `Health-related impairment`,
  ], `Multiple impairments such as deaf-blindness.`);

  mc(2, `Chronic heart disease, HIV/AIDS, asthma and diabetes are listed under…`, [
    `Health-related impairments`, `Physical impairments`, `Intellectual disability`, `Autism spectrum disorder`,
  ], `The module lists health-related impairments such as chronic heart disease, HIV/AIDS, asthma and diabetes.`);

  mc(2, `Which model of disability views persons with disabilities as lacking capacity to live independently and needing to be "cared for" in separate facilities?`, [
    `Charity model`, `Social model`, `Rights-based model`, `Medical model`,
  ], `Charity model: society gives to persons with disabilities who are seen as outside society and unable to make their own decisions.`);

  mc(2, `Which model holds that persons with disabilities need to be "cured" or treated before they can participate?`, [
    `Medical model`, `Charity model`, `Social model`, `Rights-based model`,
  ], `Medical model: the person must adapt to fit society after medical intervention.`);

  mc(2, `Under the social model, disability is…`, [
    `The consequence of the interaction between the individual and an environment that does not accommodate difference`,
    `A mistake or defect of the individual`,
    `A matter of pity and charity`,
    `Cured by medical treatment`,
  ], `The focus is on removing barriers; society must change. Disability is an element of diversity, not a "mistake".`);

  mc(2, `Which model recognises persons with disabilities as subjects of rights and states and others as having duties to respect those rights?`, [
    `Rights-based model`, `Charity model`, `Medical model`, `Integration approach`,
  ], `The human rights-based model builds on the social model: persons with disabilities can claim their rights and make decisions that affect their lives.`);

  mc(2, `In Oliver's view (quoted in the module), "disability" is…`, [
    `The disadvantage or restriction of activity caused by a social organisation that takes little or no account of people with impairments`,
    `Lacking all or part of a limb`,
    `A defective organism or mechanism of the body`,
    `A curse on the family`,
  ], `Oliver defined impairment as lacking a limb or having a defective limb or mechanism; disability is the social restriction imposed on top of it.`);

  tf(2, `In the social model, the person with a disability must change to fit society.`, false,
    `That describes the medical model. The social model says society needs to change by removing physical, social and communication barriers.`);

  mc(2, `Vulnerability is best defined as…`, [
    `Being exposed to the possibility of being attacked or harmed, physically or emotionally`,
    `Being a person with a disability`,
    `Having low income only`,
    `Being a member of a minority`,
  ], `Vulnerability: susceptibility or weakness that can be exploited or harmed. Not everyone with a disability or low income is covered by this definition alone.`);

  mc(2, `A community whose negative attitude towards change makes it ever more dependent on external support has…`, [
    `Attitudinal vulnerability`, `Physical vulnerability`, `Economic vulnerability`, `Cultural vulnerability`,
  ], `Attitudinal vulnerability leads to disunity, hopelessness and pessimism, and reduces the ability to cope with a disaster.`);

  mc(2, `An area's closeness to coastlines, fault lines or unstable hills is a measure of its…`, [
    `Physical vulnerability`, `Social vulnerability`, `Economic vulnerability`, `Psychological vulnerability`,
  ], `Physical vulnerability depends on geographic proximity to the source of disasters.`);

  mc(2, `Assessing how varied a community's sources of income are and its access to farmland, livestock and capital measures its…`, [
    `Economic vulnerability`, `Social vulnerability`, `Cultural vulnerability`, `Physical vulnerability`,
  ], `Economic vulnerability: diversity of income, access and control over the means of production, fallback mechanisms and natural resources.`);

  mc(2, `Indigenous communities losing their language or traditions through colonisation or globalisation is an example of…`, [
    `Cultural vulnerability`, `Physical vulnerability`, `Economic vulnerability`, `Psychological vulnerability`,
  ], `Cultural vulnerability: the risk of losing cultural identity or practices due to external influences or suppression.`);

  mc(2, `War, weak governance and lack of legal protection are examples of which group of causes of vulnerability?`, [
    `Political and institutional factors`, `Economic factors`, `Demographic factors`, `Psychological factors`,
  ], `Other groups of causes: economic, social, environmental, health, psychological and demographic (age, gender, migration status).`);

  mc(2, `Which of these is NOT listed as a common vulnerable group?`, [
    `Civil servants with permanent employment`,
    `Refugees, migrants and displaced persons`,
    `Victims of human trafficking`,
    `Prisoners or formerly incarcerated individuals`,
  ], `Common vulnerable groups include children, the elderly, persons with disabilities, women and girls, minorities, refugees, people in poverty, people with chronic illness, the homeless, rural populations, prisoners and victims of trafficking.`);

  mc(2, `Which approach to educating children with disabilities involved separate schools for the deaf and the blind throughout the 19th and 20th centuries?`, [
    `Specialised or residential schools`, `Mainstreaming`, `Integration`, `Inclusive education`,
  ], `Specialised/residential schools were separate institutions for children with disabilities.`);

  mc(2, `Special needs classes created in public schools in the 1960s and 70s to provide a "least restrictive environment" are called…`, [
    `Mainstreaming`, `Inclusive education`, `Residential schooling`, `Charity schooling`,
  ], `Mainstreaming (1960s–70s).`);

  mc(2, `"Round pegs for round holes; change the child to fit the system; the child must adapt or fail" describes…`, [
    `Integration`, `Inclusive education`, `Rights-based education`, `Universal design`,
  ], `Integration (1970s): the system stays the same and the student with a disability must fit it.`);

  mc(2, `"Flexible system; children are different; all children can learn; change the system to fit the child" describes…`, [
    `Inclusive education`, `Integration`, `Mainstreaming`, `Residential schooling`,
  ], `Inclusive education, applied from the last quarter of the 20th century, changes the regular education system to fit the child's needs.`);

  mc(2, `The key difference between integration and inclusion is that…`, [
    `Integration changes the child to fit the system; inclusion changes the system to fit the child`,
    `Integration is newer than inclusion`,
    `Inclusion uses separate classes; integration does not`,
    `They are exactly the same approach`,
  ], `Integration: child adapts. Inclusion: flexible system adapts.`);

  mc(2, `Failure to provide sign language interpretation, or a television without captions, is an example of which barrier?`, [
    `Communication barrier`, `Physical barrier`, `Attitudinal barrier`, `Institutional barrier`,
  ], `Communication barriers also include websites inaccessible to screen readers used by blind persons.`);

  mc(2, `Which barrier is described as one of the most pervasive barriers to equal access for persons with disabilities?`, [
    `Attitudinal barriers`, `Physical barriers`, `Informational barriers`, `Institutional barriers`,
  ], `Negative attitudes and lack of understanding about disability are among the most pervasive barriers.`);

  mc(2, `Laws, practices or processes that actively prohibit or fail to facilitate access are…`, [
    `Institutional barriers`, `Cultural barriers`, `Informational barriers`, `Attitudinal barriers`,
  ], `Institutional barriers: legislation, practices or processes.`);

  mc(2, `Myths and stereotypes about disability rooted in culture are which kind of barrier?`, [
    `Cultural barriers`, `Physical barriers`, `Communication barriers`, `Institutional barriers`,
  ], `Cultural barriers prevent full participation in community life.`);

  tf(2, `Persons with disabilities usually face only one barrier at a time, so removing one is enough for full inclusion.`, false,
    `Barriers are compounded: for employment alone a person may face inaccessible transport, buildings, workspaces and HR policies.`);

  /* ───────────── CHAPTER 3 · Special Needs of PWDs and Vulnerable Groups ───────────── */
  mc(3, `Ramps, elevators, automatic doors and accessible transport are examples of…`, [
    `Physical accessibility`, `Digital accessibility`, `Communication accessibility`, `Assistive devices`,
  ], `Physical accessibility covers infrastructure, public transport and housing.`);

  mc(3, `Screen readers and voice recognition software are examples of…`, [
    `Digital accessibility`, `Physical accessibility`, `Rehabilitation services`, `Personal assistance`,
  ], `Digital accessibility: websites, software and apps usable by people with visual, auditory or motor impairments.`);

  mc(3, `Sign language interpreters, Braille and text-to-speech systems provide…`, [
    `Communication accessibility`, `Physical accessibility`, `Financial assistance`, `Legal protection`,
  ], `They are alternative forms of communication.`);

  mc(3, `Physical, occupational and speech therapy are part of which need category?`, [
    `Healthcare and rehabilitation`, `Education and learning`, `Transportation`, `Employment`,
  ], `Rehabilitation services improve functional abilities and independence.`);

  mc(3, `Braille books, large-print materials and specialised support staff meet which need?`, [
    `Education and learning`, `Employment and economic empowerment`, `Legal and social protection`, `Transportation`,
  ], `Education: adapted curricula, learning aids, assistive technologies, trained teachers, aides and counsellors.`);

  mc(3, `Adjustable workspaces, flexible working hours and inclusive hiring are…`, [
    `Workplace accommodations`, `Mobility aids`, `Personal assistance`, `Rehabilitation`,
  ], `They fall under employment and economic empowerment (with skills training and legal protection).`);

  mc(3, `Wheelchairs, walkers and crutches are…`, [
    `Mobility aids (assistive devices)`, `Communication devices`, `Hearing aids`, `Social protection`,
  ], `Assistive devices and technology include mobility aids, hearing and vision aids, and communication devices (e.g. AAC).`);

  mc(3, `Disability benefits, grants and pensions belong under…`, [
    `Legal and social protections (financial assistance)`, `Assistive devices`, `Inclusive recreation`, `Skills training`,
  ], `Financial assistance supports living costs, medical needs and assistive technologies.`);

  mc(3, `Help with dressing, eating and personal hygiene is part of…`, [
    `Personal assistance and support`, `Transportation`, `Education`, `Social inclusion`,
  ], `Caregivers and personal assistants are especially important for people with multiple and severe impairments such as intellectual disability.`);

  mc(3, `Persons with disabilities are NOT homogeneous in their special needs. Which is NOT given as a reason?`, [
    `Their gender only`,
    `Personal experience of individuals with impairments`,
    `The type of impairment`,
    `The severity and the onset (congenital or acquired)`,
  ], `The four reasons: personal experience, type, severity/degree and onset of the impairment.`);

  mc(3, `Which is the correct order of Maslow's five categories of needs, starting from the most basic?`, [
    `Survival, safety, social needs, esteem, self-actualisation`,
    `Safety, survival, esteem, social needs, self-actualisation`,
    `Social needs, survival, safety, self-actualisation, esteem`,
    `Esteem, social needs, safety, survival, self-actualisation`,
  ], `The module lists survival (physiological), safety, social, esteem and self-actualisation, and says Maslow's model also applies to persons with disabilities.`);

  mc(3, `Which special need is most associated with children?`, [
    `Protection and safety from abuse, exploitation and neglect`,
    `Geriatric healthcare`,
    `Reintegration after war`,
    `Reproductive health services`,
  ], `Children also need education, paediatric healthcare (vaccination, nutrition, developmental screening) and psychosocial support.`);

  mc(3, `Chronic disease management, long-term care and pensions are among the special needs of…`, [
    `The elderly`, `Children`, `Women and girls`, `Victims of conflict`,
  ], `Elderly: healthcare, social support against isolation, mobility and accessibility, and financial security.`);

  mc(3, `Safe shelters, legal aid and counselling to protect against gender-based violence are special needs of…`, [
    `Women and girls`, `The elderly`, `Children only`, `Persons with intellectual disability only`,
  ], `Women and girls also need reproductive health, economic empowerment, and legal rights and equality.`);

  mc(3, `Safe spaces, relocation services, legal support and reintegration programmes are needs of…`, [
    `Victims of conflict and violence`, `The elderly`, `Children in school`, `Rural populations`,
  ], `They also need immediate medical care and long-term mental health services.`);

  mc(3, `How does the nature of an impairment affect the person's reaction?`, [
    `An acquired impairment is more likely to cause a negative reaction and needs more rehabilitation than a congenital one`,
    `A congenital impairment always needs more rehabilitation than an acquired one`,
    `Acquired and congenital impairments have identical effects`,
    `The nature of the impairment has no effect on needs`,
  ], `If impairment is acquired (accident or disease), reaction is more likely to be negative and more rehabilitation is needed.`);

  mc(3, `A person who defines himself or herself by looks or physical characteristics is more likely to…`, [
    `Feel defined by the impairment, with a negative impact`,
    `Accept the impairment easily`,
    `Be independent of family`,
    `Need no rehabilitation`,
  ], `This is the factor "the meaning of the impairment to the individual".`);

  mc(3, `A person with an amputated leg who cannot afford a proper prosthesis and so withdraws from certain jobs illustrates the impact of…`, [
    `Economic factors`, `Political factors`, `Personality`, `Family support`,
  ], `Lack of resources limits access to prostheses, personal assistance, rehabilitation and specialised transport.`);

  mc(3, `How does the political system affect the impact of disability?`, [
    `Well-enforced public policy improves participation and reduces the impact of impairment`,
    `Politics has no influence on disability`,
    `Policies only affect the economy`,
    `Political good will only matters in advanced economies`,
  ], `The government's political goodwill at policy and implementation level creates an enabling environment for full participation.`);

  tf(3, `Families can be either an enabling or a disabling factor for a person with a disability.`, true,
    `Families provide informational and emotional support, but some promote dependency or fatalistically accept limitations.`);

  mc(3, `Families of deaf children who never learn to sign are an example of a family acting as…`, [
    `A disabling factor that impedes communication`,
    `An enabling factor`,
    `An economic factor`,
    `A political factor`,
  ], `They fail to provide needed environmental resources, so the child cannot communicate as effectively as possible.`);

  mc(3, `Why is a "one-size-fits-all" approach to services no longer enough?`, [
    `Disability inclusion requires differentiated services that satisfy diverse basic needs`,
    `Because special schools are cheaper`,
    `Because needs are identical for all persons with disabilities`,
    `Because rehabilitation is no longer required`,
  ], `Differentiated services are a multiple service-delivery model, with accommodative public services in infrastructure, healthcare, education and social protection.`);

  mc(3, `Rehabilitation is best defined as…`, [
    `A process designed to optimise function and improve the quality of life of persons with disabilities`,
    `A cure that removes the impairment`,
    `Placement in a residential institution`,
    `Financial support only`,
  ], `It enables independent participation in all aspects of life and involves many participants in many forms.`);

  mc(3, `Which is part of the multidisciplinary rehabilitation team?`, [
    `Occupational therapists, physical therapists, audiologists and community-based rehabilitation workers`,
    `Only physicians`,
    `Only family members`,
    `Only teachers`,
  ], `The team includes physicians, therapists, audiologists, nurses, social workers, case managers, psychologists, counsellors, orthotics and prosthetics specialists, community-based rehabilitation workers, and the person with a disability and his or her family.`);

  tf(3, `Rehabilitation is a simple process carried out by a single professional.`, false,
    `Rehabilitation involves multiple participants and can take many forms.`);
})();
