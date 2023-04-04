import Nav from "../../components/nav/nav";
import "./article_display_page.css";
import TopStoriesCard from "../../components/cards/top_stories_card/top_stories_card";
import FooterSection from "../../components/footer/footer";
const ArticleDisplayPage = () => {
  const imgURL =
    "https://duet-cdn.vox-cdn.com/thumbor/0x0:1397x947/1200x1200/filters:focal(699x474:700x475):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24534774/brian_cox.jpeg";
  return (
    <div className="article-page-container">
      <section className="first-section">
        <Nav />
        <section className="first-section-content">
          <div>
            <img src={imgURL} />
            <p id="image-alt">Brian Cox as Logan Roy. HBO</p>
          </div>
          <section>
            <p id="genre">TV Review</p>
            <h1 className="title">
              Succession’s final season doubles down on its core conceit — to a
              fault
            </h1>
            <p className="sub-title">
              While Succession’s fourth and final season makes good on the
              series’ name, it does so while feeling comfortably stuck in a
              familiar holding pattern of treachery and ‘gotcha’ backstabbing.
            </p>
            <span>
              By <p id="author">CHARLES PULLIAM-MOORE</p>
            </span>
            <p id="date">Mar 26, 2023 at 7:45 PM GMT+5:45</p>
          </section>
        </section>
      </section>

      <section className="second-section">
        <p className="article-description">
          At its core, HBO’s Succession has always been a story about people
          doing everything in their power to attack and dethrone the only god
          they truly worship and crave validation from — a very wealthy, very
          human man who, rather understandably, thinks of everyone he meets as
          morons. Succession has spent three seasons reminding us that, no
          matter how many times Logan Roy’s would-be successors try to maneuver
          him into a tight spot, he simply can’t be beaten — an idea reinforced
          by its repetition throughout the series. That repetition gave
          Succession a kind of Sisyphean hopelessness in the past when it felt
          like the show was still finding new, unexplored depths to the Roys,
          and then putting everyone right back in their places regardless of how
          certain they were that things were about to change. In its fourth and
          final season, though, Succession sticks so closely to its classic
          narrative playbook that it sometimes feels like it doesn’t have the
          guts to make bold choices.
          <br />
          <br /> The show knows how much audiences have come to love these
          characters in very specific, familiar dynamics, and it delivers on
          them in abundance. But while this season is sure to enthrall fans
          longing for the dark satire to continue indefinitely, those expecting
          to see the show shift into a fresher, more dynamic mode for its last
          hurrah might be disappointed. In many ways, the first chunk of
          Succession’s fourth season feels like a return to the show’s season
          one roots that first laid down the fundamental power dynamics between
          billionaire media titan Logan Roy (Brian Cox), and each of his
          ambitious, deeply-broken children. Consummate tryhard failson Kendall
          (Jeremy Strong) still craves his father’s validation more than any of
          his siblings, in part, because he knows that he’s often been the heir
          apparent to the family’s news empire in moments when his addictions
          weren’t getting the best of him.
          <br />
          <br />
          As always, Siobhan (Sarah Snook) is as sensible as she is shrewd about
          playing the game to get what she wants while outwardly appearing to
          cause as little damage as possible. For all of his performative
          dirtbaggery and penchant for popping up where no one expects him,
          Roman (Kieran Culkin) knows that he’s safest when everyone assumes
          that he’s thinking about “them” as a unit rather than only looking out
          for himself. And Connor (Alan Ruck), Logan’s oldest and most bearded
          child, is still there hovering on the periphery of his family’s
          endless quarrels doing everything that he can to find meaning and
          purpose in political endeavors everyone knows are doomed to fail.
          After a lifetime of being deftly played against one another,
          Succession’s third season left Logan’s three youngest children reeling
          from their father’s power play to shut them all out — an act of war
          that united Shiv, Roman, and Kendall in a way that felt portentous for
          the show.
          <br />
          <br /> The Roy siblings are still a unified front hellbent on
          trouncing their father as Succession’s fourth season opens, but the
          show wastes no time in homing in on interpersonal frictions meant to
          make you question just how committed they are to winning as a team,
          let alone whether they can. With Shiv’s craven leech of a husband Tom
          Wambsgans (Matthew Macfadyen) being the reason the Roy sibling’s last
          ploy to overthrow their father failed, there isn’t really anyone else
          but her brothers in her corner, and the same is true for both Roman
          and Kendall. Whatever tenuous and twisted sort of affinity that
          Waystar RoyCo’s recent temporary CEO Gerri Kellman (J. Smith-Cameron)
          felt for Roman is seemingly dead, and Kendall’s past has effectively
          made him a persona non grata in the eyes of his peers. To its credit,
          season 4 knows that it can’t simply replay those character beats, and
          it instead touches on them to reinforce what makes the Roy children
          feel so alienated from most everyone else except for one another.
        </p>
        <TopStoriesCard />
      </section>
      <FooterSection />
    </div>
  );
};

export default ArticleDisplayPage;
