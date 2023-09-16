-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "responseQuestion" TEXT NOT NULL,
    "optionA" TEXT NOT NULL,
    "optionB" TEXT,
    "optionC" TEXT,
    "optionD" TEXT,
    "optionE" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "themeId" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "levelId" INTEGER,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "theme" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "theme_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "theme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
