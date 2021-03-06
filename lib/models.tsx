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
    slug: string;
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
  status: string;
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
    slug: string;
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

export type Id = {
  academicId: string;
  courseId: string;
  instructorId: string;
  classId: string;
};

export type memberType = {
  role: string;
  _id: string;
  userId: {
    studentCardNumber: string;
    dateOfBirth: string;
    _id: string;
    givenName: string;
    familyName: string;
    email: string;
    photo: string;
  };
  classId: {
    className: string;
    _id: string;
    academicId: {
      _id: string;
      schoolyear: string;
      semester: string;
    };
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
    slug: string;
  };
  __v: string;
  id: string;
};

export type user = {
  bio: string;
  createdAt: string;
  dateOfBirth: string;
  email: string;
  familyName: string;
  givenName: string;
  photo: string;
  role: string;
  studentCardNumber: string;
  updatedAt: string;
  __v: string;
  _id: string;
};
