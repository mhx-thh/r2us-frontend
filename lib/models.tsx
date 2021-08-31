export type classInfo = {
  className: string;
  nStudents: string;
  _id: string;
  courseId: {
    _id: string;
    courseName: string;
    facultyId: {
      facultyName: string;
      _id: string;
    };
  };
  instructorId: {
    _id: string;
    instructorName: string;
    id: string;
  };
  academicId: {
    _id: string;
    schoolyear: string;
    semester: string;
  };
  description: string;
  createBy: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
};

export type titleGroup = {
  className: string;
  _id: string;
  slug: string;
  courseId: {
    courseName: string;
    facultyId: {
      facultyName: string;
    };
  };
  instructorId: { instructorName: string };
  academicId: { schoolyear: string };
  semester: string;
  description: string;
  updatedAt: string;
};
export type ResourceType = {
  resourceType: string;
  resourceDescription: string;
  status: string;
  isShare: string;
  _id: string;
  resourceLink: string;
  classId: {
    className: string;
    _id: string;
    courseId: {
      _id: string;
      courseName: string;
      facultyId: {
        facultyName: string;
        _id: string;
      };
    };
    instructorId: {
      _id: string;
      instructorName: string;
      id: string;
    };
    academicId: {
      _id: string;
      schoolyear: string;
      semester: string;
    };
  };
  resourceName: string;
  userId: {
    _id: string;
    givenName: string;
    familyName: string;
    photo: string;
  };
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type ReviewType = {
  reviewType: string;
  reviewTitle: string;
  review: string;
  _id: string;
  userId: {
    _id: string;
    givenName: string;
    familyName: string;
    photo: string;
  };
  classId: {
    className: string;
    _id: string;
    courseId: {
      courseName: string;
      _id: string;
      facultyId: {
        facultyName: string;
        _id: string;
      };
    };
    academicId: {
      _id: string;
      schoolyear: string;
      semester: number;
    };
    instructorId: {
      _id: string;
      instructorName: string;
      id: string;
    };
  };
  createdAt: string;
  updatedAt: string;
};
