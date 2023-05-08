export const get_window_width = () => {
  return window.screen.width;
};

export const get_window_height = () => {
  return window.screen.height;
};

export const slice_projects_left = (projects) => {
  if (get_window_width() < 768) return projects;
  else return projects.slice(0, Math.ceil(projects.length / 2));
};

export const slice_projects_right = (projects) => {
  if (get_window_width() < 768) return [];
  return projects.slice(Math.ceil(projects.length / 2), projects.length);
};
