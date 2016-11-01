  function process(){
    var textfield = document.getElementById('positive');
    textfield.value = buzzword();
  }

  function randomarray(a) {
    var i;
    for (i=a.length;i--;) {
      var j = Math.floor((i+1)*Math.random());
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }

  function buzzword() {

    var adverbs = new Array (
        'appropriately', 'assertively', 'authoritatively', 'collaboratively', 'compellingly', 'competently', 'completely',
        'continually', 'conveniently', 'credibly', 'distinctively', 'dramatically', 'dynamically', 'efficiently',
        'energistically', 'enthusiastically', 'globally', 'holisticly', 'interactively', 'intrinsically', 'monotonectally',
        'objectively', 'phosfluorescently', 'proactively', 'professionally', 'progressively', 'quickly', 'rapidiously',
        'seamlessly', 'synergistically', 'uniquely', 'fungibly', 'Abidingly', 'Actually', 'Acutely', 'Adeptly', 'Admirably', 
        'Admiringly', 'Adorably', 'Adoringly', 'Adroitly', 'Advantageously', 'Adventuresomely', 'Aesthetically', 'Affably', 
        'Affectingly', 'Affectionately', 'Affirmatively', 'Affirmingly', 'Affluently', 'Agelessly', 'Agilely', 'Agreeably',  
        'Alertly', 'Alluringly', 'Altruistically', 'Amazingly', 'Ambitiously', 'Amenably', 'Amiably', 'Amply', 'Amusingly', 
        'Angelically', 'Appetizingly', ' Appreciably', 'Appreciatively', 'Approachably', 'Appropriately', 'Approvingly', 
        'Aptly', 'Ardently', 'Arrestingly', 'Arrousingly',' Articulately', 'Artistically', 'Assentingly', 'Assertively', 
        'Assiduously', 'Assuredly', 'Astonishingly', 'Astoundingly', 'Astutely', 'Attentively', 'Attractively', 'Auspiciously', 
        'Atypically', 'Augustly', 'Authentically', 'Authoritatively', 'Autonomously', 'Avidly', 'Awesomely','Beautifully', 
        'Beauteously', 'Befriendingly', 'Believably', 'Beneficently', 'Beneficially', 'Benevolently', 'Benignly', 'Bewilderingly', 
        'Blazingly', 'Blessedly', 'Blissfully', 'Blithely', 'Boldly', 'Boisterously', 'Bounteously', 'Bountifully', 'Bravely', 
        'Brightly', 'Brilliantly', 'Briskly', 'Broadmindedly', 'Brotherly', 'Buoyantly', 'Busily','Calmly', 'Cannily', 'Candidly', 
        'Capably', 'Captivatingly', 'Carefully', 'Caringly', 'Casually', 'Causatively', 'Celeritously', 'Celestially', 'Cerebrally', 
        'Certainly', 'Charismatically', 'Charitably', 'Charmingly', 'Cheerfully', 'Chicly', 'Chivalrously', 'Civilly', 'Clairvoyantly', 
        'Cleanly', 'Clearly', 'Clemently', 'Cleverly', 'Cogently', 'Coherently', 'Colourfully', 'Comfortably', 'Comfortingly', 'Comically', 
        'Commandingly', 'Commendably', 'Commiseratively', 'Communicatively', 'Companionably', 'Compassionately', 'Compatibly', 'Compellingly', 
        'Competently', 'Completely','Dapperly', 'Daringly', 'Dazzlingly', 'Dashingly', 'Dearly', 'Debonairly', 'Decently', 'Decisively', 
        'Decorously', 'Deeply', 'Defiantly', 'Definitely', 'Deftly', 'Delectably', 'Deliberately', 'Delicately', 'Delightedly', 'Delightfully',
         'Dependably', 'Deservingly', 'Desirably', 'Determinedly', 'Devotedly', 'Devoutly', 'Dexterously', 'Differently', 'Diligently', 
         'Diplomatically', 'Directly', 'Disarmingly', 'Discerningly', 'Discretely', 'Discriminatingly', 'Distinctively', 'Diversely', 'Divinely', 
         'Dreamily', 'Durably', 'Dynamically', 'Eagerly', 'Early', 'Earnestly', 'Earthily', 'Easily', 'Ebulliently', 'Economically', 'Ecstatically', 
         'Edifyingly', 'Educationally', 'Effectively', 'Effectually', 'Effervescently', 'Efficiently', 'Effortlessly', 'Elaborately', 'Elatedly', 
         'Elatingly', 'Electrically', 'Elegantly', 'Elevatingly', 'Eloquently', 'Eminently', 'Empathetically', 'Emphatically', 'Enchantingly',
          'Encouragingly', 'Endearingly', 'Enduringly', 'Energetically', 'Energizingly', 'Engagingly', 'Engrossingly', 'Enjoyably', 'Enlighteningly',
           'Enliveningly', 'Enrapturously', 'Enrichingly', 'Ensuringly', 'Enterprisingly', 'Entertainingly', 'Enthrallingly', 'Enthusiastically', 
           'Enticingly', 'Entrancingly', 'Entrepreneurially', 'Entirely', 'Equally', 'Equitably', 'Eruditely', 'Especially', 'Essentially', 
           'Esteemingly', 'Eternally',' Ethically', 'Euphorically', 'Even-handedly', 'Evenly', 'Evocatively', 'Exactly', 'Exaltingly', 'Exceedingly', 
           'Excellently', 'Excellingly', 'Exceptionally', 'Excitingly', 'Exclusively', 'Executively', 'Exhilaratingly', 'Exotically', 'Expansively', 
           'Expectantly', 'Expeditiously', 'Expensively', 'Expertly', 'Explicitly', 'Expressively', 'Exquisitely', 'Extraordinarily', 'Extensively', 
           'Extravagantly', 'Exuberantly', 'Exultantly', 'Exultingly', 'Handily', 'Handsomely', 'Happily', 'Hardily', 'Harmlessly', 'Harmoniously', 
           'Hauntingly', 'Healthily', 'Heartfelt', 'Heartily', 'Heavenly', 'Helpfully', 'Heroically', 'High-spiritedly', 'Hilariously', 'Highly', 
           'Hiply', 'Honestly', 'Honourably', 'Hopefully', 'Hospitably', 'Hotly', 'Humanely', 'Humbly', 'Humorously', 'Hygienically', 'Hypnotically', 
           'Objectively', 'Obligingly', 'Observantly', 'Once', 'Openly', 'Openhandedly', 'Open-heartedly', 'Open-mindedly', 'Onwards', 'Opportunely', 
           'Optimally', 'Optimistically', 'Opulently', 'Orderly', 'Originally', 'Outstandingly', 'Sensuously', 'Sentimentally', 'Serendipitously', 
           'Serenely', 'Significantly', 'Simply', 'Sincerely', 'Skilfully', 'Sleekly', 'Smartly', 'Smashingly', 'Smilingly', 'Smoothly', 'Sociably', 
           'Socially', 'Soft-heartedly', 'Softly', 'Solicitously', 'Solidly', 'Soothingly', 'Sophisticatedly', 'Soulfully', 'Soundly', 'Speedily', 
           'Specially', 'Spectacularly', 'Spellbindingly', 'Spiritedly', 'Spiritually', 'Splendidly', 'Splendiferously', 'Spontaneously', 'Sportingly', 
           'Sportively', 'Stably', 'Stalwartly', 'Statuesquely', 'Steadily', 'Straightforwardly', 'Strongly', 'Studiously', 'Stunningly', 'Stupendously',
           'Stylishly', 'Suavely', 'Sublimely', 'Substantially', 'Subtly', 'Successfully', 'Succinctly', 'Sufficiently', 'Suitably', 'Sumptuously', 
           'Superabundantly', 'Superbly', 'Superiorly', 'Supplely', 'Supportively', 'Supportingly', 'Supremely', 'Surely', 'Surprisingly', 'Sweetly', 
           'Swiftly', 'Swimmingly', 'Sympathetically', 'Systematically', 'Synergistically','Zanily', 'Zeal', 'Zealously', 'zestfully'
      );

var verbs = new Array (
  'actualize', 'administrate', 'aggregate', 'architect', 'benchmark', 'brand', 'build', 'communicate', 'conceptualize',
  'coordinate', 'create', 'cultivate', 'customize', 'deliver', 'deploy', 'develop', 'disintermediate', 'disseminate',
  'drive', 'embrace', 'e-enable', 'empower', 'enable', 'engage', 'engineer', 'enhance', 'envisioneer', 'evisculate',
  'evolve', 'expedite', 'exploit', 'extend', 'fabricate', 'facilitate', 'fashion', 'formulate', 'foster', 'generate',
  'grow', 'harness', 'impact', 'implement', 'incentivize', 'incubate', 'initiate', 'innovate', 'integrate', 'iterate',
  'leverage existing', 'leverage other\'s', 'maintain', 'matrix', 'maximize', 'mesh', 'monetize', 'morph', 'myocardinate',
  'negotiate', 'network', 'optimize', 'orchestrate', 'parallel task', 'plagiarize', 'pontificate', 'predominate',
  'procrastinate', 'productivate', 'productize', 'promote', 'provide access to', 'pursue', 'recaptiualize',
  'reconceptualize', 'redefine', 're-engineer', 'reintermediate', 'reinvent', 'repurpose', 'restore', 'revolutionize',
  'scale', 'seize', 'simplify', 'strategize', 'streamline', 'supply', 'syndicate', 'synergize', 'synthesize', 'target',
  'transform', 'transition', 'underwhelm', 'unleash', 'utilize', 'visualize', 'whiteboard', 'cloudify', 'right-shore'
  );

var adjectives = new Array (

  'extensive', 'flexible', 'focused', 'frictionless', 'front-end', 'fully researched', 'fully tested', 'functional',
  'functionalized', 'future-proof', 'global', 'go forward', 'goal-oriented',  'high-quality', 'highly efficient', 'holistic', 
  'impactful', 'inexpensive', 'innovative','just in time', 'magnetic', 'maintainable', 'market positioning', 'market-driven', 
  'mission-critical', 'multidisciplinary', 'multifunctional',
  'multimedia based', 'next-generation', 'one-to-one', 'open-source', 'optimal', 'orthogonal', 'out-of-the-box',
  'pandemic', 'parallel', 'process-centric', 'professional', 'progressive', 'prospective', 'quality', 'real-time', 'reliable', 'resource-sucking',
  'resource-maximizing', 'resource-leveling', 'revolutionary', 'robust', 'scalable', 'seamless', 'stand-alone',
  'standardized', 'standards compliant', 'state of the art', 'sticky', 'strategic', 'superior', 'sustainable',
  'synergistic', 'tactical', 'team building', 'team driven', 'technically sound', 'timely', 'top-line', 'transparent',
  'turnkey', 'ubiquitous', 'unique', 'user-centric', 'user friendly', 'value-added', 'vertical', 'viral', 'virtual',
  'visionary', 'web-enabled', 'wireless', 'world-class', 'worldwide', 'fungible', 'cloud-ready', 'elastic', 'hyper-scale',
  'on-demand', 'cloud-based', 'cloud-centric', 'cloudified', 'adaptable','adventurous','affable','affectionate','agreeable', 'ambitious','amiable',
  'amicable','amusing','brave','bright','broad-minded','calm','careful','charming','communicative','compassionate' ,'conscientious','considerate','convivial',
  'courageous','courteous','creative','decisive','determined','diligent','diplomatic','discreet','dynamic','easygoing','emotional',
  'energetic','enthusiastic','exuberant','fair-minded','faithful','fearless','forceful','frank','friendly','funny','generous','gentle',
  'good', 'gregarious', 'hard-working', 'helpful', 'honest','humorous','imaginative','impartial','independent','intellectual',
  'intelligent', 'intuitive', 'inventive', 'kind', 'loving', 'loyal', 'modest', 'neat', 'nice','optimistic',
  'passionate','patient','persistent' ,'pioneering','philosophical','placid','plucky','polite', 'powerful', 'practical','pro-active','quick-witted',
  'quiet','rational','reliable','reserved','resourceful','romantic','self-confident','self-disciplined','sensible','sensitive',
  'shy','sincere','sociable','straightforward','sympathetic','thoughtful','tidy','tough','unassuming','understanding',
  'versatile', 'warmhearted', 'willing', 'witty'
  );

var nouns = new Array (
  'action items', 'alignments', 'applications', 'architectures', 'bandwidth', 'benefits',
  'best practices', 'catalysts for change', 'channels', 'collaboration and idea-sharing', 'communities', 'content',
  'convergence', 'core competencies', 'customer service', 'data', 'deliverables', 'e-business', 'e-commerce', 'e-markets',
  'e-tailers', 'e-services', 'experiences', 'expertise', 'functionalities', 'growth strategies', 'human capital',
  'ideas', 'imperatives', 'infomediaries', 'information', 'infrastructures', 'initiatives', 'innovation',
  'intellectual capital', 'interfaces', 'internal or "organic" sources', 'leadership', 'leadership skills',
  'manufactured products', 'markets', 'materials', 'meta-services', 'methodologies', 'methods of empowerment', 'metrics',
  'mindshare', 'models', 'networks', 'niches', 'niche markets', 'opportunities', '"outside the box" thinking', 'outsourcing',
  'paradigms', 'partnerships', 'platforms', 'portals', 'potentialities', 'process improvements', 'processes', 'products',
  'quality vectors', 'relationships', 'resources', 'results', 'ROI', 'scenarios', 'schemas', 'services', 'solutions',
  'sources', 'strategic theme areas', 'supply chains', 'synergy', 'systems', 'technologies', 'technology',
  'testing procedures', 'total linkage', 'users', 'value', 'vortals', 'web-readiness', 'web services', 'fungibility',
  'clouds', 'nosql', 'storage', 'virtualization','abundance', 'ambrosia', 'aroma' ,'balm', 'beauty', 'bliss', 'bloom', 'blossom', 'bouquet', 'brilliance' ,
  'calm', 'clover', 'cornucopia', 'crystal' ,'daylight', 'delight', 'diamond', 'diversity', 'dream' ,'ecstasy' ,'flavor', 'flower', 'fragrance' ,
  'gem', 'gemstone', 'gleam', 'glimmer', 'glisten', 'glitter', 'glow', 'gold', 'grandeur' ,'harmony', 'harvest', 'health', 'heaven', 'home', 'honey' ,
  'ideal(s)', 'idyll', 'invigoration' ,'jewel','kingdom' ,'light', 'love', 'luster', 'luxuriance','magnificence', 'majesty', 'mellifluence' ,
  'natural', 'nature', 'nectar', 'nirvana', 'nourishment', 'nutriment' ,'oasis', 'opulence' ,
  'paradise', 'pastoral', 'peace', 'perfume', 'pleasantness', 'plenty', 'positive', 'profusion', 'prosperity', 'providence', 'purity' ,
  'quiet','radiance', 'rainbow', 'ray of sunshine', 'redolence', 'regeneration', 'reinvigoration', 'rejuvenation', 'relaxation', 
  'renewal', 'replenishment', 'reservoir', 'resilience', 'resplendence', 'restorative', 'revitalization', 'rose' ,
  'serenity', 'shelter', 'shimmer', 'shine', 'sparkle', 'spectacular', 'splendor', 'spring', 'springtime', 'sublime', 
  'summer', 'summertime', 'sun', 'sunbeam', 'sunlight', 'sunniness', 'sunshine', 'superabundance' ,'tranquillity' ,
  'utopia' ,'verdure', 'vibrancy', 'virgin', 'vitality' ,'warmth', 'wholesomeness', 'wildflower', 'wonderland'
  );

adjectives = randomarray(adjectives);
nouns = randomarray(nouns);
adverbs = randomarray(adverbs);
verbs = randomarray(verbs);

var x;

var statement = adverbs[adverbs.length-1];
adverbs.length -= 1;
statement = statement + " " + verbs[verbs.length-1];
verbs.length -= 1;
statement = statement + " " + adjectives[adjectives.length-1];
adjectives.length -= 1;
statement = statement + " " + nouns[nouns.length-1];
nouns.length -= 1;

return statement;
}
