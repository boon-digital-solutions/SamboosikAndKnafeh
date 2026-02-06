import { motion } from "framer-motion";
import { Heart, Calendar, Star, Sparkles, ChevronDown, Cat, Home as HomeIcon, Users, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

import samboosikTunnel from "@assets/IMG_0331_1770324392867.webp";
import samboosikCouch from "@assets/IMG_0180_1770324392873.webp";
import samboosikCouch2 from "@assets/IMG_0227_1770324392880.webp";
import knafehPetted from "@assets/IMG_5997_1770324392872.webp";
import knafehSink from "@assets/IMG_3672_1770324392874.webp";
import knafehTent from "@assets/IMG_2389_1770324392876.webp";
import knafehTree from "@assets/IMG_8173_1770324392879.webp";
import bothCuddling from "@assets/IMG_9485_1770324392877.webp";
import bothCurled from "@assets/IMG_9659_1770324392878.webp";
import familyKitchen from "@assets/IMG_8830_1770324392873.webp";
import zainaDog from "@assets/IMG_1900_1770324392875.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2" data-testid="logo-nav">
            <Cat className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold" data-testid="text-logo">S & K</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('hero')} data-testid="nav-home">
                <HomeIcon className="w-4 h-4 mr-1" /> Home
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('profiles')} data-testid="nav-profiles">
                <Cat className="w-4 h-4 mr-1" /> Meet the Cats
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('gallery')} data-testid="nav-gallery">
                <Camera className="w-4 h-4 mr-1" /> Gallery
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('family')} data-testid="nav-family">
                <Users className="w-4 h-4 mr-1" /> Family
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium" data-testid="badge-hero-tagline">
              <Sparkles className="w-4 h-4 mr-2" />
              A Tale of Two Cats
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            data-testid="heading-hero"
          >
            <span className="text-foreground" data-testid="text-samboosik">Samboosik</span>
            <span className="text-muted-foreground mx-4">&</span>
            <span className="text-foreground" data-testid="text-knafeh">Knafeh</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            data-testid="text-hero-description"
          >
            Two beloved cats with unique personalities, heartwarming stories, 
            and an unforgettable bond with their family.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border" data-testid="badge-adoption-date">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm" data-testid="text-adoption-date">Adopted 2018 & 2021</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border" data-testid="badge-forever-family">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm" data-testid="text-forever-family">Forever Family</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="col-span-1 space-y-3 sm:space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
                  data-testid="img-hero-samboosik"
                >
                  <img src={samboosikTunnel} alt="Samboosik in tunnel" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </div>
              <div className="col-span-1 pt-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
                  data-testid="img-hero-both"
                >
                  <img src={bothCuddling} alt="Both cats cuddling" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </div>
              <div className="col-span-1 space-y-3 sm:space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
                  data-testid="img-hero-knafeh"
                >
                  <img src={knafehSink} alt="Knafeh in sink" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          data-testid="icon-scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CatProfileCard({ 
  name, 
  nickname, 
  adoptedYear, 
  image, 
  secondImage,
  description, 
  likes, 
  dislikes, 
  favorite,
  funFact,
  isReversed = false 
}: {
  name: string;
  nickname: string;
  adoptedYear: string;
  image: string;
  secondImage: string;
  description: string;
  likes: string;
  dislikes: string;
  favorite: string;
  funFact: string;
  isReversed?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
      data-testid={`card-profile-${name.toLowerCase()}`}
    >
      <div className="w-full lg:w-1/2 space-y-4">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          data-testid={`img-profile-${name.toLowerCase()}-main`}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="mb-2 bg-primary/90 text-primary-foreground" data-testid={`badge-adopted-${name.toLowerCase()}`}>{adoptedYear}</Badge>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white drop-shadow-lg" data-testid={`heading-profile-${name.toLowerCase()}`}>{name}</h3>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
          data-testid={`img-profile-${name.toLowerCase()}-secondary`}
        >
          <img src={secondImage} alt={`${name} second photo`} className="w-full h-full object-cover" />
        </motion.div>
      </div>
      
      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2" data-testid={`label-nickname-${name.toLowerCase()}`}>Also known as</p>
          <p className="text-xl text-muted-foreground" data-testid={`text-nickname-${name.toLowerCase()}`}>{nickname}</p>
        </div>
        
        <p className="text-lg leading-relaxed text-foreground/90" data-testid={`text-description-${name.toLowerCase()}`}>{description}</p>
        
        <div className="grid gap-4">
          <Card className="border-border/50" data-testid={`card-likes-${name.toLowerCase()}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground" data-testid={`label-likes-${name.toLowerCase()}`}>Likes</p>
                  <p className="text-foreground" data-testid={`text-likes-${name.toLowerCase()}`}>{likes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50" data-testid={`card-dislikes-${name.toLowerCase()}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-destructive text-lg">!</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground" data-testid={`label-dislikes-${name.toLowerCase()}`}>Dislikes</p>
                  <p className="text-foreground" data-testid={`text-dislikes-${name.toLowerCase()}`}>{dislikes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50" data-testid={`card-favorite-${name.toLowerCase()}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground" data-testid={`label-favorite-${name.toLowerCase()}`}>Favorite Thing</p>
                  <p className="text-foreground" data-testid={`text-favorite-${name.toLowerCase()}`}>{favorite}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 bg-primary/5" data-testid={`card-funfact-${name.toLowerCase()}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-primary" data-testid={`label-funfact-${name.toLowerCase()}`}>Fun Fact</p>
                  <p className="text-foreground" data-testid={`text-funfact-${name.toLowerCase()}`}>{funFact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

function ProfilesSection() {
  return (
    <section id="profiles" className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-profiles">
            <Cat className="w-4 h-4 mr-2" />
            Meet the Stars
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-profiles">Our Beloved Cats</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-profiles-description">
            Get to know Samboosik and Knafeh - each with their own unique personality, 
            quirks, and way of winning hearts.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          <CatProfileCard
            name="Samboosik"
            nickname="Mr. Boosik, Basboos"
            adoptedYear="Adopted 2018"
            image={samboosikCouch}
            secondImage={samboosikCouch2}
            description="Mr. Boosik is a dignified gentleman. He was originally a foster cat but his mom fell in love and had to keep him. When he was young, he was a master escape artist and expert hider. He hated men (except for his jiddo), was terrified of storms, and was anxiously attached to his mom. Now, his favorite humans are his Khalto Hala and his jiddo. He loves to talk to people in little chirps and monitor the activities of the other cats in the house."
            likes="Food (especially cheese) and his favorite humans"
            dislikes="Other cats - but his biggest enemy is Knafeh"
            favorite="Khalto Hala's lap"
            funFact="He responds to the Meow Mix song - he was trained to associate it with food, so whenever he's lost, they play the song and he comes running!"
          />
          
          <CatProfileCard
            name="Knafeh"
            nickname="Noofi, Nafnouf"
            adoptedYear="Adopted 2021"
            image={knafehTree}
            secondImage={knafehTent}
            description="Knafeh is the sweetest little maniac. He was rescued when he was just a stray kitten. When he was young, he used to scream nonstop outside of his mom's bedroom so she would wake up to feed him. He was also known to eat anything and everything left on the counter. Now, he loves to go outside and explore the neighborhood. He is notorious for staying out way too late, making his teta worry all night. He is the cuddliest and most loving of all the cats."
            likes="Food and sneaking away to go outside (we suspect he has another family)"
            dislikes="His cousin Zaina"
            favorite="Probably a toy at his other family's home"
            funFact="He sleeps with his mouth open! He also used to climb on his grandparents' heads and bite them."
            isReversed
          />
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    { src: bothCuddling, alt: "Both cats cuddling by the window", caption: "Cuddling by the window (without Samboosik's consent)" },
    { src: bothCurled, alt: "Both cats curled up together", caption: "A rare peaceful moment together" },
    { src: samboosikTunnel, alt: "Samboosik in his tunnel", caption: "Samboosik in his favorite tunnel" },
    { src: knafehPetted, alt: "Knafeh being petted", caption: "Knafeh enjoying some love" },
    { src: knafehSink, alt: "Knafeh in the sink", caption: "Knafeh's unique relaxation spot" },
    { src: familyKitchen, alt: "All cats with jiddo", caption: "Treat time with jiddo" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-gallery">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-gallery">Captured Moments</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-gallery-description">
            A collection of precious moments featuring our favorite felines.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative"
              data-testid={`card-gallery-${index}`}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-gallery-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium" data-testid={`text-gallery-caption-${index}`}>{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StoriesSection() {
  const stories = [
    {
      title: "The Nursing Incident",
      content: "When Knafeh was adopted, he thought Samboosik was his mom. He used to try to nurse. Samboosik never forgave him for that. Now, Knafeh can't even be in the vicinity without Samboosik hissing at him. Don't be fooled by pictures of them cuddling; it was always Knafeh cuddling without Samboosik's consent.",
      icon: Heart
    },
    {
      title: "The Meow Mix Signal",
      content: "Both cats respond to the Meow Mix song. They were trained to associate the song with food, so whenever they're lost, the family plays the song and they come running. It's their secret cat signal!",
      icon: Star
    },
    {
      title: "The Double Life",
      content: "Knafeh loves to go outside and explore the neighborhood. He is notorious for staying out way too late, making his teta worry all night. The family suspects he has another family somewhere in the neighborhood!",
      icon: Cat
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-stories">
            <Sparkles className="w-4 h-4 mr-2" />
            Stories & Memories
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-stories">Tales Worth Telling</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-stories-description">
            Some of the most memorable stories from the lives of Samboosik and Knafeh.
          </p>
        </motion.div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover-elevate overflow-visible" data-testid={`card-story-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <story.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3" data-testid={`heading-story-${index}`}>{story.title}</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-story-${index}`}>{story.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">!</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Warning: Expert Hunters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Both cats are notorious hunters. They occasionally bring "gifts" from the neighborhood to show their love. 
                    The family has learned to check at the door before stepping outside!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function FamilySection() {
  return (
    <section id="family" className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4" data-testid="badge-family">
            <Users className="w-4 h-4 mr-2" />
            The Family
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-family">Important Relationships</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-family-description">
            Samboosik and Knafeh are part of a loving family that includes special humans and fellow furry friends.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-border/50" data-testid="card-family-humans">
              <div className="relative aspect-[4/3]">
                <img src={familyKitchen} alt="Cats with their jiddo" className="w-full h-full object-cover" data-testid="img-family-jiddo" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-bold text-white mb-1" data-testid="heading-humans-love">The Humans They Love</h3>
                  <p className="text-white/80 text-sm" data-testid="text-humans-names">Their jiddo, teta, Khalto Hala, and Khalto Farah</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed" data-testid="text-humans-description">
                  Samboosik's favorite humans are his Khalto Hala and his jiddo. Knafeh's best friends are his mom and his teta.
                  They also love their Khalto Farah, who is the mother of their cousin cats Gaza, Beirut, and Zaina.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border-border/50" data-testid="card-cousin-cats">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3" data-testid="heading-cousin-cats">Cousin Cats</h3>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-cousin-cats">
                  Samboosik and Knafeh live with their cousin cats - Beirut and Gaza. They're all part of one big, furry family!
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" data-testid="badge-beirut">Beirut</Badge>
                  <Badge variant="secondary" data-testid="badge-gaza">Gaza</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 overflow-hidden" data-testid="card-zaina">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5">
                  <img src={zainaDog} alt="Zaina the dog" className="w-full h-48 sm:h-full object-cover" data-testid="img-zaina" />
                </div>
                <CardContent className="p-6 sm:w-3/5">
                  <h3 className="font-display text-xl font-semibold mb-3" data-testid="heading-zaina">Cousin Zaina</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3" data-testid="text-zaina">
                    Zaina, their dog cousin, came to visit recently and the cats are still trying to recover. 
                    Samboosik has started to spray all around the house, marking his territory. His teta is very upset about this.
                  </p>
                  <Badge variant="outline" className="text-destructive border-destructive/30" data-testid="badge-knafeh-dislikes">
                    Knafeh doesn't like her
                  </Badge>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card/50" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4" data-testid="logo-footer">
            <Cat className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold" data-testid="text-footer-title">Samboosik & Knafeh</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mb-6" data-testid="text-footer-description">
            Two beloved cats bringing joy, chaos, and endless love to their family since 2018 and 2021.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-footer-love">
            <Heart className="w-4 h-4 text-primary" />
            <span>Made with love for two special cats</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <HeroSection />
      <ProfilesSection />
      <GallerySection />
      <StoriesSection />
      <FamilySection />
      <Footer />
    </div>
  );
}
