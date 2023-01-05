-- CreateTable
CREATE TABLE "Headphone" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "description" STRING NOT NULL,
    "impedance" INT4 NOT NULL DEFAULT 0,
    "frequency" STRING NOT NULL DEFAULT '0 Hz - 0 KHz',
    "sensitivity" INT4 NOT NULL DEFAULT 0,

    CONSTRAINT "Headphone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" STRING NOT NULL,
    "hid" STRING NOT NULL,
    "title" STRING NOT NULL,
    "review" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" INT4 NOT NULL DEFAULT 0,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_hid_fkey" FOREIGN KEY ("hid") REFERENCES "Headphone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
