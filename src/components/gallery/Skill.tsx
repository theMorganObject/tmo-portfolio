import classes from './Skill.module.css';

interface SkillProps {
  background: string;
  skill: string;
  icon: JSX.Element;
}

function Skill(props: SkillProps) {
  return (
    <li className={`${classes.skill} ${classes[props.background]}`}>
      <div className={classes.skillContent}>
        {props.skill} {props.icon}
      </div>
    </li>
  );
}

export default Skill;
