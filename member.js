function skillsMember() {
  var member = document.getElementById('member');
  var skills = document.getElementById('skills');
  var memberValue = member.value;
  var skillsValue = skills.value;
  if (memberValue === 'Member') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
}