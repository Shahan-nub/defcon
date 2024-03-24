import AchievementCard from "./AchievementCard";
import AchievementsTitle from "./AchievementsTitle";

export default function Achievements() {
  return (
    <div className="py-10 lg:py-16 defcon flex flex-col items-center justify-around">
      <AchievementsTitle></AchievementsTitle>
      <AchievementCard></AchievementCard>
    </div>
  )
}
