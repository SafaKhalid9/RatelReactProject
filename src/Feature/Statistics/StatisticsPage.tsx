import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../Components/ShadCn/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../Components/ShadCn/table";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const stats = {
  students: 60,
  teachers: 15,
  halaqat: 20,
  events: 4,
};

const attendanceData = [
  { day: "السبت", value: 5 },
  { day: "الأحد", value: 10 },
  { day: "الإثنين", value: 15 },
  { day: "الثلاثاء", value: 28 },
  { day: "الأربعاء", value: 23 },
  { day: "الخميس", value: 30 },
];

const subjects = [
  { name: "أقل من 5 أجزاء", value: 30 },
  { name: "من 5 إلى 10 أجزاء", value: 30 },
  { name: "أكثر من 10 أجزاء", value: 10 },
  { name: "من 10 إلى 20 جزء", value: 10 },
  { name: "أقل من 25 جزء", value: 15 },
  { name: "القرآن كامل", value: 5 },
];

const absentStudents = [
  { days: 6, halaqa: "النور", name: "سارة" },
  { days: 5, halaqa: "الفرقان", name: "نورة" },
  { days: 5, halaqa: "الفرقان", name: "هدى" },
  { days: 4, halaqa: "النور", name: "نجلاء" },
  { days: 4, halaqa: "الفرقان", name: "نوف" },
];

const crowdedHalaqat = [
  {
    name: "الفرقان",
    teacher: "أ. نورة",
    students: 15,
    capacity: 9,
    notes: "مكتظة - بحاجة لنقل 6 طالبات",
  },
  {
    name: "النور",
    teacher: "أ. سارة",
    students: 13,
    capacity: 9,
    notes: "مكتظة - بحاجة لنقل 4 طالبات",
  },
  {
    name: "الهدى",
    teacher: "أ. هدى",
    students: 9,
    capacity: 9,
    notes: "الوضع مقبول",
  },
  {
    name: "البيان",
    teacher: "أ. نجلاء",
    students: 9,
    capacity: 9,
    notes: "الوضع مقبول",
  },
  {
    name: "البصيرة",
    teacher: "أ. نوف",
    students: 8,
    capacity: 9,
    notes: "الوضع مقبول",
  },
];

const COLORS = [
  "#89C2D9",
  "#A8D5BA",
  "#FFE69A",
  "#F7B267",
  "#CDB4DB",
  "#FFADAD",
];

const Statistics = () => {
  return (
    <div className="space-y-6">
      <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <Card className="border-none rounded-2xl text-xl text-white font-bold bg-linear-to-t from-(--dark-green) to-(--light-brown) h-28 sm:h-32">
          <div className="flex items-center h-full px-4 sm:px-6">
            <img
              src="../../../public/student.png"
              alt="Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 object-contain"
            />
            <div className="flex-1 flex flex-col items-center justify-center">
              <CardTitle className="text-center text-base sm:text-lg">
                عدد الطلاب
              </CardTitle>
              <CardContent className="text-center text-xl sm:text-2xl">
                {stats.students}
              </CardContent>
            </div>
          </div>
        </Card>

        <Card className="border-none rounded-2xl text-xl text-white font-bold bg-linear-to-t from-(--dark-green) to-(--light-brown) h-28 sm:h-32">
          <div className="flex items-center h-full px-4 sm:px-6">
            <img
              src="../../../public/teachers.png"
              alt="Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 object-contain"
            />
            <div className="flex-1 flex flex-col items-center justify-center">
              <CardTitle className="text-center text-base sm:text-lg">
                عدد المعلمين
              </CardTitle>
              <CardContent className="text-center text-xl sm:text-2xl">
                {stats.teachers}
              </CardContent>
            </div>
          </div>
        </Card>

        <Card className="border-none rounded-2xl text-xl text-white font-bold bg-linear-to-t from-(--dark-green) to-(--light-brown) h-28 sm:h-32">
          <div className="flex items-center h-full px-4 sm:px-6">
            <img
              src="../../../public/book.png"
              alt="Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 object-contain"
            />
            <div className="flex-1 flex flex-col items-center justify-center">
              <CardTitle className="text-center text-base sm:text-lg">
                عدد الحلقات
              </CardTitle>
              <CardContent className="text-center text-xl sm:text-2xl">
                {stats.halaqat}
              </CardContent>
            </div>
          </div>
        </Card>

        <Card className="border-none rounded-2xl text-xl text-white font-bold bg-linear-to-t from-(--dark-green) to-(--light-brown) h-28 sm:h-32">
          <div className="flex items-center h-full px-4 sm:px-6">
            <img
              src="../../../public/activity.png"
              alt="Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 object-contain"
            />
            <div className="flex-1 flex flex-col items-center justify-center">
              <CardTitle className="text-center text-base sm:text-lg">
                عدد الفعاليات
              </CardTitle>
              <CardContent className="text-center text-xl sm:text-2xl">
                {stats.events}
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 gap-4 bg-white border-none rounded-2xl py-3">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-(--primary)">
              نسبة الطلاب في كل قسم
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row items-center gap-5 justify-evenly">
              <PieChart width={250} height={250}>
                <Pie
                  data={subjects}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {subjects.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <div className="space-y-3 text-sm w-full lg:w-auto">
                {subjects.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center gap-3"
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-sm"
                      style={{ backgroundColor: COLORS[i % COLORS.length] }}
                    ></span>
                    <span className="flex-1 font-semibold">{item.name}</span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-none rounded-2xl shadow-md p-3 col-span-1 gap-4">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-(--primary)">
              مجموع الحضور
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <LineChart width={320} height={200} data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="day"
                  tickMargin={15}
                  interval={0}
                  tick={{ fontSize: 12 }}
                  padding={{ right: 20 }}
                />
                <YAxis tickMargin={30} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6b705c"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 bg-white rounded-2xl shadow-md h-50">
          <div className="text-base font-semibold text-(--primary) py-2 px-4">
            الطلاب الأكثر غياب
          </div>
          <div className="h-37 overflow-x-auto">
            <Table className="min-w-[300px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-center">
                    اسم الطالب
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    اسم الحلقة
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    عدد الغيابات
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {absentStudents.map((s, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-center">{s.name}</TableCell>
                    <TableCell className="text-center">{s.halaqa}</TableCell>
                    <TableCell className="text-center font-semibold">
                      {s.days}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-md h-50">
          <div className="text-base font-semibold text-(--primary) py-2 px-4">
            الحلقات المكتظة
          </div>
          <div className="h-37 overflow-x-auto">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-center">
                    اسم الحلقة
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    اسم المعلمة
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    عدد الطلاب
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    الطاقة الاستيعابية
                  </TableHead>
                  <TableHead className="font-bold text-center">
                    ملاحظات
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {crowdedHalaqat.map((h, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-center font-medium">
                      {h.name}
                    </TableCell>
                    <TableCell className="text-center">{h.teacher}</TableCell>
                    <TableCell className="text-center">{h.students}</TableCell>
                    <TableCell className="text-center">{h.capacity}</TableCell>
                    <TableCell className="text-center">{h.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
